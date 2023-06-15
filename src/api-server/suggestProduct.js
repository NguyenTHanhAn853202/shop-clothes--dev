import * as requests from '~/utils/Api/request';

export const newProduct = async (type = '', limit = 5) => {
    const data = await requests.get('product/new-product', {
        params: {
            type,
            limit,
        },
    });
    return data.data;
};
