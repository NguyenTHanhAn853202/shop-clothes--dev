import request from '~/utils/Api/request';
import { perPageFeedback } from '~/utils/perPage';

export const showFeedback = async (idProduct, page,sort) => {
    try {
        const data = await request.get('feedback/show', {
            params: {
                userID: localStorage?.id,
                idProduct: idProduct,
                perPage: perPageFeedback,
                page: page,
                sort
            },
        });
        return data.data.data;
    } catch (error) {}
};

// favourite feedback
export const favouriteFeedback = async (idFeedback) => {
    const data = await request.post('feedback/favourite', {
        userID: localStorage?.id,
        idFeedback,
    });
    return data.data;
};
