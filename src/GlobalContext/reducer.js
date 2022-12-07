import { LOGIN } from "./key"


export const context ={
    login:false,
}

const reducer = (state , action) => {
    const {key, value} = action

    switch (key) {
        case LOGIN:
            return {
                ...state,
                login: value,
            }
        default:
            break;
    }
}

export default reducer