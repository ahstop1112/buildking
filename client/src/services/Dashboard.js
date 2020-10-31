import axios from 'axios';
import { RESTFUL_API_URL } from '../utility/constants';

const instance = axios.create({
    baseURL: RESTFUL_API_URL,
});

export const getIdToken = () =>
    instance({
        method: 'GET',
        url: '/api_raw/auth/csrf_token',
        headers: { 
            'Content-Type': 'application/json'
        }
});
