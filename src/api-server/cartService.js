import * as requests from '~/utils/Api/request';

export const add = async (idProduct, number) => {
    const datas = await requests.post('account/cart/update', {
        name: localStorage.userName,
        idProduct,
        number,
    });
    return datas;
};

export const get = async () => {
    const datas = await requests.post('account/cart/get', {
        name: localStorage.userName,
    });
    return datas;
};
