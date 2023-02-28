import * as request from '~/utils/Api/request';

export const payment = async (userID, infoOfOder) => {
    try {
        const datas = await request.post('oder/create', { userID, infoOfOder }, {});
        return datas.data;
    } catch (error) {
        console.log(error);
    }
};
