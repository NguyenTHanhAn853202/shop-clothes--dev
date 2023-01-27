import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
    const { pathname, state } = useLocation();

    useEffect(() => {
        window && window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
};

export default ScrollToTop;
