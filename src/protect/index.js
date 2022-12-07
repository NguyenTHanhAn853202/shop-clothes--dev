import { Outlet , Navigate } from "react-router-dom";
import {useContext} from 'react'
import {Context} from '~/GlobalContext/index'

function Protect() {
    const context = useContext(Context)
    const [state,dispatch] = context
    return (state.login ? <Outlet /> : <Navigate to='/account/login'/>);
}

export default Protect;