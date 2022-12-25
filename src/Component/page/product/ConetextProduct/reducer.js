import { SHOW } from './key';

export const states = {
    product: {},
};

function reducer(props, state) {
    const { key, value } = state;
    switch (key) {
        case SHOW:
            return {
                ...props,
                product: value,
            };
        default:
            console.log('error at ContextProduct!!');
            break;
    }
}

export default reducer;
