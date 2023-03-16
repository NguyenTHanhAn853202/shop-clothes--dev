import * as requests from '~/utils/Api/request';

export const login = async (email, password) => {
    try {
        const datas = await requests.post('account/login', {
            userName: email,
            password,
        });
        return datas;
    } catch (error) {
        console.log(error.message);
    }
};

export const create = async (email, password) => {
    const datas = await requests.post('account/create', {
        userName: email,
        password,
    });
    return datas;
};

export const registerManager = async (userName, password, rePassword, role, yourPassword) => {
    const data = await requests.post('account/create-manager', {
        userName,
        password,
        rePassword,
        role,
        userNameManager: localStorage.userName,
        yourPassword,
        id: localStorage.id,
    });
    return data;
};

export const logout = async (refreshToken) => {
    const datas = await requests.post('account/logout', { userName: localStorage.userName, token: refreshToken });
    localStorage.clear();
    return datas;
};
