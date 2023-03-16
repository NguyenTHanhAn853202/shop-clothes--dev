import { Outlet, Navigate } from 'react-router-dom';

export function Protect() {
    const login = localStorage.login;
    return login ? <Outlet /> : <Navigate to="/account/login" />;
}

export function EmployeeAndManager() {
    const role = localStorage.role;
    return role === 'manager' || role === 'employee' ? <Outlet /> : <Navigate to="/" />;
}

export function Manager() {
    const role = localStorage.role;
    return role === 'manager' ? <Outlet /> : <Navigate to={'/'} />;
}
