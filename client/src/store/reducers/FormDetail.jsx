import { verifyEmail } from 'utility/';

const FormDetailReducer = (state, action) => {
    const { type } = action;
    let currentField = [];
    let currentValue = '';
    let userInfo = [];

    switch (action.type){
        case 'SET_USER_STATE':
            
            return{
                ...state,
                authStr:  `Bearer ${action.token}`,
                idToken: action.token,
            }
        case 'CHECK_STATE': 
            console.log(state);
            return{
                ...state
            }
        case 'SET_LOGIN_BY_EMAIL':
            return{
                ...state,
                login_method: 'basic',
                email: action.email
            }    
        case 'INITIAL_CSRF_TOKEN':

            // console.log(action.csrfToken);
            return{
                ...state,
                csrfToken: action.csrfToken
            }
        case 'LOGIN_FIELD_CHECK':
            currentField = state.loginFields[action.fieldName];
            currentField['value'] = action.value;
            let isValid = false;

            // 
            switch (currentField['validation']){
                case 'email':
                    isValid = verifyEmail(currentField['value']);
                    currentField['isValid'] = isValid;
                break;
                case 'password':
                    isValid = currentField['value'].length > 5;
                    currentField['isValid'] = isValid;
                break;
                default:
                    currentField['isValid'] = isValid;
            }

            console.log(currentField);

            return{
                ...state,
                loginFields: {
                    ...state.loginFields,
                    [action.fieldName]: currentField
                }
            }
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

export default FormDetailReducer;