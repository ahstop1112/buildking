import axios from 'axios';
import { RESTFUL_API_URL } from '../utility/constants';

const instance = axios.create({
    baseURL: RESTFUL_API_URL,
});

export const getAllProject = csrfToken => 
    instance({
        method: 'GET',
        url: '/api_raw/auth/project/',
        headers: { 
            'Content-Type': 'application/json',
            'X-CSRFToken':  csrfToken,
        }
    });