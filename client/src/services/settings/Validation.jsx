import axios from 'axios';
import { RESTFUL_API_URL } from '../../utility/constants';

const instance = axios.create({
    baseURL: RESTFUL_API_URL,
});

export const getValidatedData = (idToken) =>
    instance({
        method: 'GET',
        url: `/manage-api/v1/upload_data/failed/`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const getValidatedDataByPage = (idToken, pageSize, currentRecord) =>
    instance({
        method: 'GET',
        url: `/manage-api/v1/upload_data/failed/?limit=${pageSize}&offset=${currentRecord}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const getExistingCompanyData = (idToken, profileId) =>
    instance({
        method: 'GET',
        url: `/manage-api/v1/company/query/${profileId}/`,
        // url: `/manage-api/v1/company/query/`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const manuallyValidateData = (idToken, payload) => 
    instance({
        method: 'POST',
        url: '/manage-api/v1/upload_data/failed/',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        },
        data: {
            "payload": payload
        }
});
