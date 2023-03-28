import * as request from '~/utils/Api/request';

export const accounts = async (isDisabled, role, find) => {
    try {
        const data = await request.get('account/account-employee', {
            params: { id: localStorage?.id, role: role, name: find, isDisabled },
        });
        return data.data;
    } catch (error) {
        console.log(error);
    }
};

export const disable = async (isDisabled, listID = []) => {
    try {
        const datas = await request.post('account/disable-account-employee', {
            id: localStorage?.id,
            listID: listID,
            isDisabled,
        });
        return datas.data;
    } catch (error) {
        console.log(error);
    }
};
