import request from '~/utils/Api/request';

export const updateInfoOfUser = async (field = {}, config) => {
    try {
        const data = await request.post('account/info-of-user', field, config);
        return data.data;
    } catch (error) {
        console.log('error at upload info of user: ', error);
    }
};

