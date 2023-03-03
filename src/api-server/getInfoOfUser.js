import * as request from '~/utils/Api/request';

export const getInfoOfUser = async () => {
    try {
        const data = request.get('account/get-info-of-user', {
            params: { userName: localStorage?.userName, id: localStorage?.id },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
