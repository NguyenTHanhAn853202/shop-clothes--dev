import * as requests from '~/utils/Api/request';

export const search = async (nameProduct) => {
    try {
        const datas = await requests.get('product/search', {
            params: { name: nameProduct },
        });
        return datas;
    } catch (error) {
        console.log("error");
    }
};
