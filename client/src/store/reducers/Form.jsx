const FormReducer = (state, action) => {

    switch (action.type){
        case 'INITIAL_FORMS':

            // console.log(action.project_data);
            
            return{
                ...state,
                forms: action.forms_data.length > 0 ? action.forms_data : [],
            }
        case 'INITIAL_UPDATE_DIVISION':

                // console.log(action.update_project[0]['description']);
                
                return{
                    ...state,
                    updateDivision: {
                        id:  action.division_data[0]['id'],
                        name: action.division_data[0]['name'],
                        description: action.division_data[0]['description'],
                        title: action.division_data[0]['title']
                    }
                }
        case 'CHANGE_NEW_TEXTFIELD':
                return{
                    ...state,
                    updateDivision: {
                        ...state.updateProject,
                        [action.fieldName]: action.fieldValue,
                    }
                };
        case 'CHANGE_UPDATE_TEXTFIELD':
                return{
                    ...state,
                    updateDivision: {
                        ...state.updateProject,
                        [action.fieldName]: action.fieldValue,
                    }
                };
        case 'INITIAL_PROJECT_NAME':
                return{
                    ...state,
                    projectName: action.projectName
                };
        case 'INITIAL_DIVISION_NAME':
                // console.log(action.divisionName);
                return{
                    ...state,
                    divisionName: action.divisionName
                };
        default: 
            console.log("error");
            
        return{
            ...state
        };   
    }
}

export default FormReducer;