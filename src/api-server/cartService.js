import * as requests from '~/utils/Api/request';

export const add = async (idProduct, size, number, color, price, image) => {
    const datas = await requests.post('cart/add-product', {
        id: localStorage.id,
        idProduct,
        size,
        number,
        color,
        price,
        image,
    });
    return datas;
};

export const get = async (page) => {
    const datas = await requests.get('cart/get', {
        params: {
            id: localStorage.id,
            page,
            perPage: 4,
        },
    });
    return datas.data;
};

export const remove = async (id = '') => {
    try {
        const datas = await requests.remove('cart/delete', {
            id,userID:localStorage?.id 
        });
        return datas.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateCart = async (cartUpdate) => {
    try {
        const datas = await requests.post('cart/update-product', {
            cartUpdate,
        });
        return datas.data;
    } catch (error) {
        console.log(error);
    }
};
