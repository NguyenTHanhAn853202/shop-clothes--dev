import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/defaultLayout';
import layout from './router/router';
function App() {
    return (
        <>
            <DefaultLayout>
                <Routes>
                    {layout.map((item) => {
                        const Layout = item.element;
                        return (
                            <Route key={item} path={item.path} element={<Layout />}>
                                {item.slug && <Route path=":slug" element={<Layout />} />}
                            </Route>
                        );
                    })}
                </Routes>
            </DefaultLayout>
        </>
    );
}

export default App;
