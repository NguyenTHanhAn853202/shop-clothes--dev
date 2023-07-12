import * as request from '~/utils/Api/request';

export const showOrder = async (type) => {
    const data = await request.get('order/show-order', {
        params: {
            type,
            column:'createdAt',
            id: localStorage.id,
        },
    });
    return data.data;
};
