const DivisionsReducer = (state, action) => {
    let userInfo = [];

    switch (action.type){
        case 'INITIAL_DIVISIONS':

            // console.log(action.project_data);
            
            return{
                ...state,
                divisions: action.divisions_data,
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
                        ...state.updateDivision,
                        [action.fieldName]: action.fieldValue,
                    }
                };
        case 'INITIAL_PROJECT_NAME':
                console.log(action.projectName);
                return{
                    ...state,
                    projectName: action.projectName
                };
        case 'SUCCESS_LOGIN': 
            
            if (process.env.REACT_APP_CUSTOM_NODE_ENV === 'development' ||
                process.env.REACT_APP_CUSTOM_NODE_ENV === 'staging') {
                window.sessionStorage.setItem('user', JSON.stringify(state));
            }
            // console.log(window.sessionStorage);
            return{
                ...state,
                error: null,
                isLoggingIn: true,
                hasRole: true
            }
        case 'LOGOUT': 
            if (process.env.REACT_APP_CUSTOM_NODE_ENV === 'development' ||
                process.env.REACT_APP_CUSTOM_NODE_ENV === 'staging') {
                window.sessionStorage.clear();
                window.location.href = '/login';
            }
        
            window.location.href = '/';
        break;
        case 'INITIAL_USER_INFO': 
            userInfo = action.userInfo;
            console.log(userInfo[0]);

            window.location.href = '/projects';
            //company: "Buildking"
            // email: "steve.hui@buildking.hk"
            // first_name: "Steve Hui"
            // id: 7
            // last_name: ""
            // user_title: "Site Agent"
            // username: "Steve Hui"
            return{
                ...state,
                userInfo: userInfo
            }
        break;
        default: 
            console.log("error");
            
        return{
            ...state
        };   
    }
}

export default DivisionsReducer;