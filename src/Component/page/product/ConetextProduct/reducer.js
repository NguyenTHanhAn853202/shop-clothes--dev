import { SHOW } from './key';

export const states = {
    product: {},
    suggestion: [],
};

function reducer(props, state) {
    const { key, value } = state;
    switch (key) {
        case SHOW:
            return {
                ...props,
                product: value?.data || {},
                suggestion: value?.suggestion || [],
            };
        default:
            console.log('error at ContextProduct!!');
            break;
    }
}

export default reducer;
