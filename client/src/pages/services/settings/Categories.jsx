import axios from 'axios';
import { RESTFUL_API_URL } from '../../utility/constants';

const instance = axios.create({
    baseURL: RESTFUL_API_URL,
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

export const addNewCategoryType = (idToken, categoryName, parentID) => 
    instance({
        method: 'POST',
        url: `/manage-api/v1/category/`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        },
        data: {
            'category_name': categoryName,
	        'parent_id': parentID
        }
});

export const updateCategory = (idToken, categoryID, categoryName) =>
    instance({
        method: 'PUT',
        url: `/manage-api/v1/category/${categoryID}/`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        },
        data: {
            'category_name': categoryName
        }
});

export const removeCategory = (idToken, categoryID, categoryName) =>
    instance({
        method: 'DELETE',
        url: `/manage-api/v1/category/${categoryID}/`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        },
        data: {
            'category_name': categoryName,
            'parent_id': 0
        }
});

export const updateSubCategory = (idToken, categoryID, category, subCategory) => 
    instance({
        method: 'POST',
        url: `/manage-api/v1/category/${categoryID}/subcategory/`,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        },
        data: {
            'category': category,
            'sub_category': subCategory,
        }
});