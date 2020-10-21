import axios from 'axios';
import { RESTFUL_API_URL } from '../utility/constants';

const instance = axios.create({
    baseURL: RESTFUL_API_URL,
});

export const getSearchData = (idToken, isSubCompany, keyword, pageSize, currentRecord) =>
    instance({
        method: 'GET',
        url: `/manage-api/v1/search/?keyword=${keyword}&is_group_company=${isSubCompany}&limit=${pageSize}&offset=${currentRecord}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});