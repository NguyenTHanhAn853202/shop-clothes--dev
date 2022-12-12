import * as requests from '~/utils/Api/request';

export const add = async (idProduct, number) => {
    console.log(localStorage.userName);
    const datas = await requests.post('account/cart/update', {
        name: localStorage.userName,
        idProduct,
        number,
    });
    return datas;
};
