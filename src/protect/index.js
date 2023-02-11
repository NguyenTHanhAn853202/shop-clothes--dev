import { Outlet, Navigate } from 'react-router-dom';

function Protect() {
    const login = localStorage.login;
    return login ? <Outlet /> : <Navigate to="/account/login" />;
}

export default Protect;
