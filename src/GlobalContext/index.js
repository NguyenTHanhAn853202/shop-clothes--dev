import {useReducer, createContext} from 'react'
import reducer ,{context} from './reducer';



export const Context = createContext()
function GlobalContext({children}) {

    const [state, dispatch] = useReducer(reducer,context)

    return ( 
        <Context.Provider value={[state,dispatch]}>{children}</Context.Provider>
     );
}

export default GlobalContext;