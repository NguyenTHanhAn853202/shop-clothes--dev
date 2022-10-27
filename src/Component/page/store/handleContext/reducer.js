import { ChangeSort, ChangeProduct } from './action';

export const datas = {
    optionSort: 'defaut',
    optionProduct: 'defaut',
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ChangeSort:
            state.optionSort = action.value;
            return { ...state };
        case ChangeProduct:
            state.optionProduct = action.value;
            return { ...state };
        default:
            return state;
    }
};
