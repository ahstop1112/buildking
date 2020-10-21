import axios from 'axios';
import { RESTFUL_API_URL } from '../utility/constants';

const instance = axios.create({
    baseURL: RESTFUL_API_URL,
});

export const signIn = (email, password, csrfToken) =>
    instance({
        method: 'POST',
        url: '/api_raw/auth/login',
        headers: { 
            'Content-Type': 'application/json',
            'X-CSRFToken':  csrfToken,
        },
        data: {
            "email": email,
            "password": password
        }
});