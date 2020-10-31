const ProjectsReducer = (state, action) => {
    let userInfo = [];

    switch (action.type){
        case 'INITIAL_ALL_DATA':
            return{
                ...state,
                data: action.all_data,
            }
        case 'INITIAL_UPDATE_PROJECT':

                console.log(typeof(action.update_project[0]['extra']));
                
                return{
                    ...state,
                    updateProject: {
                        id:  action.update_project[0]['id'],
                        name: action.update_project[0]['name'],
                        description: action.update_project[0]['description'],
                        extra: action.update_project[0]['extra']
                    }
                }
        case 'CHANGE_TEXTFIELD':
                return{
                    ...state,
                    updateProject: {
                        ...state.updateProject,
                        [action.fieldName]: action.fieldValue,
                    }
                };
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

export default ProjectsReducer;