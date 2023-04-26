import * as requests from '~/utils/Api/request';

export const product = async (find = '', other) => {
    try {
        const datas = await requests.get('product/get-products', {
            params: {
                find,
                ...other,
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
        return datas.data;
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
export const getType = async (typeProduct, other) => {
    try {
        const data = await requests.get('product/type', {
            params: {
                typeProduct: typeProduct,
                ...other,
            },
        });
        return data.data;
    } catch (error) {
        console.log(error);
    }
};

export const uploadProduct = async (formData, config) => {
    const data = await requests.post('product/upload-product', formData, config);
    return data;
};

export const deleteProduct = async (id) => {
    const data = await requests.remove('product/delete', {
        id: localStorage?.id,
        role: localStorage.role,
        id,
    });
    return data.data;
};
// http://localhost:3100/product/get-products
