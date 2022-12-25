import { createContext, useReducer } from 'react';
import reducer, { states as context } from './reducer';

export const Context = createContext();

function ContextProduct({ children }) {
    const [states, dispatch] = useReducer(reducer, context);
    return <Context.Provider value={[states, dispatch]}>{children}</Context.Provider>;
}

export default ContextProduct;
