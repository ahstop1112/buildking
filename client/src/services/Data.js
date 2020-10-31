import axios from 'axios';
import { RESTFUL_API_URL } from '../utility/constants';
import { changeToSQL } from '../utility';

const instance = axios.create({
    baseURL: RESTFUL_API_URL,
});

//Project////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllProject = () => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    'i_project',
            'columns':      ["id", "name", "description", "extra"],
            'where':        [
                                ["deleted", "=", "0", "AND"]
                            ],
            "orderBy":      [
                                ["id", "ASC"]
                            ]
        }
});

export const getProjectById = (editId) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    'i_project',
            'columns':      ["id", "name", "description", "extra"],
            "where":        [
                                ["deleted", "=", "0", "AND"],
                                ["id","=", `${editId}`,"AND"]
                            ]
        }
});

export const addProject = addProject => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'insert',
            'tableName':    'i_project',
            'columns':      ["name", "description", "extra"],
            "values":       [`${addProject['name']}`, `${addProject['description']}`, `${changeToSQL(addProject['extra'])}` ]
        }
});

export const updateProject = (projectId, updateProject) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'update',
            'tableName':    'i_project',
            'columns':      ["name", "description", "extra"],
            "where":        [["id", "=", `${projectId}`, "AND"]],
            "values":       [`${updateProject['name']}`, `${updateProject['description']}`, `\ ${changeToSQL(updateProject['extra'])} `]
        }
});

export const removeProject = projectId => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'update',
            'tableName':    'i_project',
            'columns':      ["deleted"],
            "where":        [["id", "=", `${projectId}`, "AND"]],
            "values":       [0]
        }
});

//Division////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllDivision = (projectId) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    'i_division',
            'columns':      ["id", "name", "description", "extra", "project_id"],
            'where':        [
                                ["deleted", "=", "0", "AND"],
                                ["project_id","=", `${projectId}`,"AND"]
                            ],
            "orderBy":      [
                                ["id", "ASC"]
                            ]
        }
});

export const getDivisionById = (divisionId) =>
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    'i_division',
            'columns':      ["id", "name", "description", "title"],
            "where":        [
                                ["deleted", "=", "0", "AND"],
                                ["id","=", `${divisionId}`,"AND"]
                            ]
        }
});

export const addDivision = addDivison => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'insert',
            'tableName':    'i_division',
            'columns':      ["name", "description", "extra"],
            "values":       [`${addDivison['name']}`, `${addDivison['description']}`, `${changeToSQL(addDivison['extra'])}` ]
        }
});

export const updateDivision = (divisionId, updateDivision) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'update',
            'tableName':    'i_project',
            'columns':      ["name", "description", "extra"],
            "where":        [["id", "=", `${divisionId}`, "AND"]],
            "values":       [`${updateDivision['name']}`, `${updateDivision['description']}`, `\ ${changeToSQL(updateDivision['extra'])} `]
        }
});


export const removeDivision = divisionId => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'update',
            'tableName':    'i_division',
            'columns':      ["deleted"],
            "where":        [["id", "=", `${divisionId}`, "AND"]],
            "values":       [0]
        }
});

//Form/////////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllForm = (divisionId) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    'i_form',
            'columns':      ["id", "no", "data", "created_time", "division_id", "state_id"],
            'where':        [
                                ["deleted", "=", "0", "AND"],
                                ["division_id","=", `${divisionId}`,"AND"]
                            ],
            "orderBy":      [
                                ["id", "ASC"]
                            ]
        }
});

//Form Type///////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllFormType = () => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    'i_form_type',
            'columns':      ["id", "name", "title", "description", "extra"],
            'where':        [
                                ["deleted", "=", "0", "AND"]
                            ],
            "orderBy":      [
                                ["id", "ASC"]
                            ]
        }
});

export const getFormTypeById = formTypeId =>
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    'i_form_type',
            'columns':      ["id", "name", "title", "description", "extra"],
            "where":        [
                                ["deleted", "=", "0", "AND"],
                                ["id","=", `${formTypeId}`,"AND"]
                            ]
        }
});

export const addFormType = addFormType => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'insert',
            'tableName':    'i_form_type',
            'columns':      ["name", "title", "description", "extra"],
            "values":       [`${addFormType['name']}`, `${addFormType['title']}`, `${addFormType['description']}`, `${addFormType['extra']}` ]
        }
});

export const updateFormType = (formTypeId, updateFormType) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'update',
            'tableName':    'i_form_type',
            'columns':      ["name", "title", "description", "extra"],
            "where":        [["id", "=", `${formTypeId}`, "AND"]],
            "values":       [`${updateFormType['name']}`, `${updateFormType['title']}`, `${updateFormType['description']}`, `${updateFormType['extra']}` ]
        }
});


export const removeRole = roleId => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'update',
            'tableName':    'i_form_type',
            'columns':      ["deleted"],
            "where":        [["id", "=", `${roleId}`, "AND"]],
            "values":       [0]
        }
});

//Form Template///////////////////////////////////////////////////////////////////////////////////////////
export const getAllFormTemplate = () => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    'i_form_template',
            'columns':      ["id", "name", "description", "division_id", "form_type_id", "template", "extra"],
            'where':        [
                                ["deleted", "=", "0", "AND"]
                            ],
            "orderBy":      [
                                ["id", "ASC"]
                            ]
        }
});

export const getFormTemplateById = formTemplateId =>
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    'i_form_template',
            'columns':      ["id", "name", "description", "division_id", "form_type_id", "template", "extra"],
            "where":        [
                                ["deleted", "=", "0", "AND"],
                                ["id","=", `${formTemplateId}`,"AND"]
                            ]
        }
});

export const addFormTemplate = addFormTemplate => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'insert',
            'tableName':    'i_form_template',
            'columns':      ["name", "description", "division_id", "form_type_id", "template", "extra"],
            "values":       [`${addFormTemplate['name']}`, `${addFormTemplate['title']}`, `${addFormTemplate['division_id']}`,`${addFormTemplate['form_type_id']}`, `${addFormTemplate['template']}`, `${addFormTemplate['extra']}` ]
        }
});

export const updateFormTemplate = (formTemplateId, updateFormTemplate) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'insert',
            'tableName':    'i_form_template',
            'columns':      ["name", "description", "division_id", "form_type_id", "template", "extra"],
            "where":        [["id", "=", `${formTemplateId}`, "AND"]],
            "values":       [`${updateFormTemplate['name']}`, `${updateFormTemplate['title']}`, `${updateFormTemplate['division_id']}`,`${updateFormTemplate['form_type_id']}`, `${updateFormTemplate['template']}`, `${updateFormTemplate['extra']}` ]
        }
});

export const removeFormTemplate = formTemplateId => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'update',
            'tableName':    'i_form_template',
            'columns':      ["deleted"],
            "where":        [["id", "=", `${formTemplateId}`, "AND"]],
            "values":       [0]
        }
});

//All///////////////////////////////////////////////////////////////////////////////////////////////////
export const getAllData = (tableName, columns, where) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    tableName,
            'columns':      columns,
            'where':        where,
            "orderBy":      [
                                ["id", "ASC"]
                            ]
        }
});

export const getItemById = (tableName, columns, checkColumn, itemId) =>
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'select',
            'tableName':    tableName,
            'columns':      columns,
            "where":        [
                                ["deleted", "=", "0", "AND"],
                                [`${checkColumn}`,"=", `${itemId}`,"AND"]
                            ]
        }
});

export const addItem = (tableName, columns, data) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'insert',
            'tableName':    tableName,
            'columns':      columns,
            "values":       data
        }
});

export const updateItem = (tableName, columns, data, checkColumn, itemId) => 
    instance({
        method: 'POST',
        url: '/api/cms/table/t_mix/',
        headers: { 
            'Content-Type': 'application/json',
            // 'X-CSRFToken':  csrfToken,
        },
        data: {
            'type':         'update',
            'tableName':    tableName,
            'columns':      columns,
            "where":        [[`${checkColumn}`, "=", `${itemId}`, "AND"]],
            "values":       data
        }
});

// export const updateRole = (roleId, updateRole) => 
//     instance({
//         method: 'POST',
//         url: '/api/cms/table/t_mix/',
//         headers: { 
//             'Content-Type': 'application/json',
//             // 'X-CSRFToken':  csrfToken,
//         },
//         data: {
//             'type':         'update',
//             'tableName':    'i_role',
//             'columns':      ["name", "title", "description"],
//             "where":        [["id", "=", `${roleId}`, "AND"]],
//             "values":       [`${updateRole['name']}`, `${updateRole['title']}`, `\ ${updateRole['description']} `]
//         }
// });


// export const removeRole = roleId => 
//     instance({
//         method: 'POST',
//         url: '/api/cms/table/t_mix/',
//         headers: { 
//             'Content-Type': 'application/json',
//             // 'X-CSRFToken':  csrfToken,
//         },
//         data: {
//             'type':         'update',
//             'tableName':    'i_role',
//             'columns':      ["deleted"],
//             "where":        [["id", "=", `${roleId}`, "AND"]],
//             "values":       [0]
//         }
// });