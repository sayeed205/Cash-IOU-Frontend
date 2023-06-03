import axios from 'axios';

const Fetcher = axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },

    withCredentials: true,
});

Fetcher.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response.status === 401) {
            console.log('401');
        }
        return Promise.resolve(err.response);
    }
);

export default Fetcher;
