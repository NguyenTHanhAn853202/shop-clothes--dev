import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/defaultLayout';
import layout from './router/router';
import Home from '~/Component/page/home';
import { Fragment } from 'react';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    {layout.map((item) => {
                        const Layout = item.element || Fragment;
                        return (
                            <Route key={item}  path={item.path} element={<Layout />}>
                                {item.slug && <Route path=":slug" element={<Layout />} />}
                            </Route>
                        );
                    })}
                </Route>
            </Routes>
        </>
    );
}

export default App;
