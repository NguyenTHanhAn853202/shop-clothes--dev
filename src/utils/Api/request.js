import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3100/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export const post = async (path, option = {}) => {
    const response = await request.post(path, option);
    return response.data;
};

export const remove = async (path, option = {}) => {
    const response = await request.delete(path, option);
    return response.data;
};

// chưa dùng đến

export default request;
