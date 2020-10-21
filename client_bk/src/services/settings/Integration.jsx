import axios from 'axios';
import { RESTFUL_API_URL } from '../../utility/constants';

const instance = axios.create({
    baseURL: RESTFUL_API_URL,
});

export const getUploadedHistory = (idToken) =>
    instance({
        method: 'GET',
        url: '/manage-api/v1/upload_data/tasks/',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

// {"code":"400","detail":["[0]: (ud0013, error[invalid literal for int() with base 10: 'NYIREGYHAZA'])","[1]: (ud0013, error[invalid literal for int() with base 10: 'HONGKONG'])"],"data":{}}

export const getDBFields = (idToken) =>
    instance({
        method: 'GET',
        url: '/manage-api/v1/upload_data/db_fields/',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        }
});

export const uploadCSVFile = (idToken, fileName, is_group_company, mappedColumns) => 
    instance({
        method: 'POST',
        url: '/manage-api/v1/upload_data/',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Serai ${idToken}`
        },
        data: {
            "file_name": fileName,
            "is_group_company": is_group_company,
            "mapped_columns": mappedColumns
        }
});