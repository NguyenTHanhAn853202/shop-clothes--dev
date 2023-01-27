import * as requests from '~/utils/Api/request';

export const product = async (find = '', type = 'less') => {
    try {
        const datas = await requests.get('product/get-products', {
            params: {
                find,
                type,
            },
        });
        return datas;
    } catch (error) {
        console.log(error);
    }
};

export const oneProduct = async (slug = '') => {
    try {
        const datas = await requests.get('product/get-one-product', {
            params: {
                slug,
            },
        });
        return datas;
    } catch (err) {
        console.log(err);
    }
};

export const getProduct = async (idProduct) => {
    try {
        const datas = await requests.get('product/get-product', {
            params: {
                idProduct,
            },
        });
        return datas;
    } catch (error) {
        console.log(error);
    }
};
export const getType = async (type) => {
    try {
        const data = await requests.get('product/type', {
            params: {
                type: type,
            },
        });
        return data.data;
    } catch (error) {
        console.log(error);
    }
};
// http://localhost:3100/product/get-products
