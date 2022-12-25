import * as requests from '~/utils/Api/request';

export const refreshToken = async (token = '') => {
    try {
        const datas = await requests.post('account/refreshTokens', {
            token: token,
        });
        return datas;
    } catch (error) {
        console.log(error);
    }
};
