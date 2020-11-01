const DivisionsReducer = (state, action) => {
    let userInfo = [];

    switch (action.type){
        case 'INITIAL_ALL_DATA':
            return{
                ...state,
                data: action.all_data,
            }
        case 'INITIAL_UPDATE_ITEM':

            // console.log(action.update_item);
            
            return{
                ...state,
                updateItem: action.update_item,
                updateItemName: action.item_name
            }
        case 'CHANGE_UPDATE_TEXTFIELD':
            return{
                ...state,
                updateItem: {
                    ...state.updateItem,
                    [action.fieldName]: action.fieldValue,
                }
            };
        case 'INITIAL_PROJECT_NAME':
                // console.log(action.projectName);
            return{
                ...state,
                projectName: action.projectName
            };
        default: 
            console.log("error");
            
        return{
            ...state
        };   
    }
}

export default DivisionsReducer;