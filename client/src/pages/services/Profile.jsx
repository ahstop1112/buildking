import axios from 'axios';
import { RESTFUL_API_URL } from '../utility/constants';

const instance = axios.create({
    baseURL: RESTFUL_API_URL,
});

export const getCompanyProfile = (idToken, companyId) =>
    instance({
        method: 'GET',
        url: `/manage-api/v1/company/${companyId}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const getSearchData = (idToken, isSubCompany) =>
    instance({
        method: 'GET',
        url: `/manage-api/v1/company/?is_sub_company=${isSubCompany}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const getAllCompany = (idToken) =>
    instance({
        method: 'GET',
        url: `/manage-api/v1/company/`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const getAllConnection = (idToken, companyId) =>
    instance({
        method: 'GET',
        url: `/manage-api/v1/company/associated_companies/${companyId}/`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const getAllCategoryTypes = (idToken) =>
    instance({
        method: 'GET',
        url: '/manage-api/v1/category/',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const getAllRelationships = (idToken, companyId) =>
    instance({
        method: 'GET',
        url: '/manage-api/v1/category/',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const patchRelationship = (idToken, parentCompany, connectedCompany, relationships, startTime, endTime, userAction) => 
    instance({
        method: 'PATCH',
        url: `/manage-api/v1/connection/update/${parentCompany}/${connectedCompany}/`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        },
        data: {
            'relationships': userAction === 'remove' ? [] : relationships,
            'start_time': userAction === 'remove' ? '1900-01-01 00:00:00' : startTime,
            'end_time': userAction === 'remove' ?  '1900-01-01 00:00:00' : endTime,
        }
});

export const getNetwork = (idToken, currentCompanyId) => 
    instance({
        method: 'GET',
        url: `/manage-api/v1/connection/graphs/?from_company_id=${currentCompanyId}`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});