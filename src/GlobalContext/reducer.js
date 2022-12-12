import { LOGIN } from './key';

export const context = {
    login: false,
};

const reducer = (state, action) => {
    const { key, value } = action;

    switch (key) {
        case LOGIN:
            const newValue = value === 'false' ? false : value;
            return {
                ...state,
                login: newValue,
            };
        default:
            break;
    }
};

export default reducer;
