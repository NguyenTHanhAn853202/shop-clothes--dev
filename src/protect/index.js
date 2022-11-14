import { Outlet , Navigate } from "react-router-dom";

function Protect() {
    const issue = true
    return (issue ? <Outlet /> : <Navigate to='/'/>);
}

export default Protect;