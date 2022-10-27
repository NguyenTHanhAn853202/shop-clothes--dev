import {createContext} from 'react'
import {datas,reducer} from './reducer'
export const StoreContext = createContext()

function StoreProvider({children}) {
    return (<StoreContext.Provider value={[datas,reducer]}>{children}</StoreContext.Provider>);
}

export default StoreProvider;

