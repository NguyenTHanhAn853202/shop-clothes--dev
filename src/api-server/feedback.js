import request from '~/utils/Api/request';

export const showFeedback = async (idProduct, page) => {
    try {
        const data = await request.get('feedback/show', {
            params: {
                userID: localStorage?.id,
                idProduct: idProduct,
                perPage: 4,
                page: page,
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
