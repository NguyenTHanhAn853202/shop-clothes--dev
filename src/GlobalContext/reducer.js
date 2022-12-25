import { LOGIN, CART, BOUGHT, REMOVE_CART, ADD_BOUGHT, REMOVE_BOUGHT, ADD_CART } from './key';

export const context = {
    login: false,
    cart: [],
    bought: [],
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
        case CART:
            return {
                ...state,
                cart: value,
            };
        case ADD_CART:
            const { same, data } = value;
            const newData = state.cart;
            if (same) {
                const sameProduct = state.cart.find((item) => item.idProduct === data.idProduct);
                const index = state.cart.indexOf(sameProduct);
                newData.splice(index, 1, data);
            } else {
                newData.push(data);
            }
            return {
                ...state,
                cart: [...newData],
            };
        case REMOVE_CART:
            const newCart = state.cart.filter((item) => item.idProduct !== value.idProduct);
            return {
                ...state,
                cart: [...newCart],
            };
        case BOUGHT:
            return {
                ...state,
                bought: value,
            };
        case ADD_BOUGHT:
            return {
                ...state,
                cart: [...state.cart, value],
            };
        case REMOVE_BOUGHT:
            const newBought = state.bought.filter((item) => item.idProduct !== value.idProduct);
            return {
                ...state,
                cart: [...newBought],
            };
        default:
            console.log('switch default ready');
            break;
    }
};

export default reducer;
