import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/defaultLayout';
import FormAccount from '~/formAccount';
import { layoutPublic, layoutPrivate, layoutAccount } from './router/router';
import { Fragment } from 'react';
import LazyCom from './utils/lazyCom';
import ScrollToTop from './utils/scrollToTop';
import Protect from '~/protect';
import { Context } from './GlobalContext';
import { CART, LOGIN } from './GlobalContext/key';
import { useEffect, useContext } from 'react';
import request from '~/utils/Api/request';
import { refreshToken } from '~/api-server/refeshToken';
import { get } from './api-server/cartService';

function App() {
    const [states, dispatch] = useContext(Context);

    request.interceptors.request.use(
        async (config) => {
            const url = config.url;
            if (url.includes('get-products') || url.includes('login') || url.includes('account/refreshTokens'))
                return config;
            const timeNow = Date.now();
            const expiresIn = localStorage.expiresIn * 1;
            if (timeNow > expiresIn) {
                const token = localStorage.refreshToken;
                const {
                    token: { accessToken, expiresIn },
                } = await refreshToken(token);
                localStorage.accessToken = accessToken;
                localStorage.expiresIn = expiresIn;
            }
            config.headers.Authorization = localStorage.accessToken;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    useEffect(() => {
        dispatch({ key: LOGIN, value: localStorage.login });
        (async function () {
            try {
                const data = await get();
                dispatch({ key: CART, value: data });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <ScrollToTop>
            <DefaultLayout>
                <LazyCom>
                    <Routes>
                        {layoutPublic.map((item) => {
                            const Layout = item.element || Fragment;
                            return (
                                <Route key={item} path={item.path} element={<Layout />}>
                                    {item.slug && <Route path=":slug" element={<Layout />} />}
                                </Route>
                            );
                        })}
                        <Route path="/account" element={<FormAccount />}>
                            {layoutAccount.map((item, index) => {
                                const Layout = item.element || Fragment;
                                return (
                                    <Route key={index} path={item.path} element={<Layout />}>
                                        {item.slug && <Route path=":slug" element={<Layout />} />}
                                    </Route>
                                );
                            })}
                        </Route>
                        {layoutPrivate.map((item) => {
                            const Layout = item.element || Fragment;
                            return (
                                <Route key={item} element={<Protect />}>
                                    <Route path={item.path} element={<Layout />}>
                                        {item.slug && <Route path=":slug" element={<Layout />} />}
                                    </Route>
                                </Route>
                            );
                        })}
                    </Routes>
                </LazyCom>
            </DefaultLayout>
        </ScrollToTop>
    );
}

export default App;
