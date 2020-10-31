const UserReducer = (state, action) => {

    switch (action.type){
        case 'INITIAL_ALL_DATA':
            return{
                ...state,
                data: action.all_data,
            }
        case 'INITIAL_UPDATE_ITEM':

            console.log(typeof(action.update_role[0]['extra']));
            
            return{
                ...state,
                updateItem: {
                    id:  action.update_role[0]['id'],
                    name: action.update_role[0]['name'],
                    description: action.update_role[0]['description'],
                    extra: action.update_role[0]['extra']
                }
            }
        case 'CHANGE_TEXTFIELD':
            return{
                ...state,
                updateRole: {
                    ...state.updateRole,
                    [action.fieldName]: action.fieldValue,
                }
            };
        default: 
            console.log("error");
            
        return{
            ...state
        };   
    }
}

export default UserReducer;