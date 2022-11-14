import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/defaultLayout';
import FormAccount from '~/formAccount';
import { layoutPublic, layoutPrivate , layoutAccount } from './router/router';
import { Fragment } from 'react';
import LazyCom from './utils/lazyCom';
import ScrollToTop from './utils/scrollToTop';
import Protect from '~/protect'
function App() {
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
                        <Route path='/account' element={<FormAccount />}>
                            {layoutAccount.map((item) => {
                                const Layout = item.element || Fragment;
                                return (
                                    <Route key={item} path={item.path} element={<Layout />}>
                                        {item.slug && <Route path=":slug" element={<Layout />} />}
                                    </Route>
                                );
                            })}
                        </Route>
                        {layoutPrivate.map((item) => {
                            const Layout = item.element || Fragment;
                            return (
                                <Route element={<Protect />}>
                                    <Route key={item} path={item.path} element={<Layout />}>
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
