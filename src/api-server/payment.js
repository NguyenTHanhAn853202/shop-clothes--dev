import * as request from '~/utils/Api/request';

export const payment = async (infoOfOder, typeOfPayment, codeDiscount) => {
    try {
        const datas = await request.post('oder/create', {
            userID: localStorage.id,
            infoOfOder,
            typeOfPayment,
            codeDiscount,
        });
        return datas.data;
    } catch (error) {
        console.log(error);
    }
};
