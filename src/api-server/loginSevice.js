import * as requests from '~/utils/Api/request';

export const login = async (email,password) => {
    try {
        const datas = await requests.post('account/check', {
            name:email,
            password
        });
        return datas;
    } catch (error) {
        console.log('error');
    }
};