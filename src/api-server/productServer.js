import * as requests from '~/utils/Api/request';

export const product = async (q = '', type = 'less') => {
    try {
        const datas = await requests.get('product/get-products', {
            params: {
                q,
                type,
            },
        });
        return datas;
    } catch (error) {
        console.log('error');
    }
};
// http://localhost:3100/product/get-products
