import * as request from '~/utils/Api/request';

export const changePassword = async (oldPassword, newPassword, reNewPassword) => {
    const datas = await request.post('account/change-password', {
        oldPassword,
        newPassword,
        reNewPassword,
        userID: localStorage?.id,
        userName: localStorage?.userName,
    });
    return datas
};
