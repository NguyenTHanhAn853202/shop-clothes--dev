import * as requests from '~/utils/Api/request';

export const login = async (email, password) => {
    try {
        const datas = await requests.post('account/login', {
            name: email,
            password,
        });
        return datas;
    } catch (error) {
        console.log('error');
    }
};

export const create = async (email, password) => {
    const datas = await requests.post('account/create', {
        name: email,
        password,
    });
    return datas;
};
