import * as requests from '~/utils/Api/request';

export const add = async (idProduct, name, image, cost, number, slugProduct) => {
    const datas = await requests.post('account/cart/update', {
        userName: localStorage.userName,
        idProduct,
        number,
        cost,
        image,
        name,
        slugProduct,
    });
    return datas;
};

export const get = async () => {
    const datas = await requests.post('account/cart/get', {
        userName: localStorage.userName,
    });
    return datas;
};

export const remove = async (idProduct = '') => {
    try {
        const datas = await requests.remove('account/cart/delete', {
            data: { userName: localStorage.userName, idProduct: idProduct },
        });
        return datas;
    } catch (error) {
        console.log(error);
    }
};

export const updateCart = async (cartUpdate) => {
    try {
        const datas = await requests.post('account/cart/update-in-cart', {
            cartUpdate,
            id: localStorage.id,
            userName: localStorage.userName,
        });
        return datas.data;
    } catch (error) {
        console.log(error);
    }
};
