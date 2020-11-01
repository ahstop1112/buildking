const FormTypeReducer = (state, action) => {

    switch (action.type){
        case 'INITIAL_ALL_DATA':
            return{
                ...state,
                data: action.all_data,
            }
        case 'INITIAL_UPDATE_ITEM':

            console.log(action.update_item);
            
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
        default: 
            console.log("error");
            
        return{
            ...state
        };   
    }
}

export default FormTypeReducer;