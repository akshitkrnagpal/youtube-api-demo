import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    responseType: 'json'
});

export default axiosMiddleware(client);
