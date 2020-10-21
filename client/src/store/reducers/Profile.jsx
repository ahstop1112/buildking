const ProfileReducer = (state, action) => {

    const { type } = action;
    let currentId = '';
    let currentCat = 0;
    let connections = [];
    let allCategories = [];
    let groupCompanies = [];
    let pendingList = [];
    let defaultList = [];
    let tmpSubCatList = [];
    let subCategoryList = [];
    let relationships = [];
    let selectedConnection = [];
    let selectedRelationship = [];
    let optionList = [];
    let selectedOption = [];
    let userAction = 'add';

    switch (type){
        case 'INITIAL_COMPANY': 

            // console.log(action.company);

            return{
                ...state,
                company: action.company ? action.company : {}
            }
        case 'INIITAL_GROUP_COMPAINES':
            
            action.companies.length > 0 && action.companies.filter(item => item.id !== state.company.id).map((item, index) => {
                let mappedItem = {
                    label: item.name,
                    value: item.id
                };

                groupCompanies.push(mappedItem);
            });
            // console.log(groupCompanies);

            return{
                ...state,
                groupCompanies: groupCompanies,
                totalCount: action.totalCount
            }
        case 'INIITAL_ALL_CONNCECTION': 
            Object.keys(action.connections).length > 0 && Object.keys(action.connections).map(item => {
                // console.log(item);
                connections.push(action.connections[item]);
            })
            // 

            // console.log(connections);

            return{
                ...state,
                connections: connections,
                tempConnections: connections,
                totalConnections: Object.keys(action.connections).length > 0 ? Object.keys(action.connections).length : 0
            }
        case 'INITIAL_CAT_TYPES': 

            allCategories = action.allCategories;

            allCategories.length > 0 && allCategories.map((item, index) => {
                tmpSubCatList = [];
                item['sub_categories'].length > 0 && item['sub_categories'].map((item, index) => {
                   
                    let mappedSubCategories = {
                        'subCategoryId': item.category_id,
                        'subCategoryName': item.category_name,
                        'parentId': item.parent_id,
                        'label':  `${item.category_name} (${item.category_id})`,
                        'value': item.category_id
                    };
                    
                    tmpSubCatList.push(mappedSubCategories);
                });

                let mappedItem = {
                    'selectedOption': null,
                    'categoryId': item.category_id,
                    'categoryName': item.category_name,
                    'subCategories': tmpSubCatList,
                };

                let categoryItem = {
                    'label':  `${item.category_name} (${item.category_id})`,
                    'value': item.category_id
                }

                pendingList[index] = mappedItem;
                optionList[index] = categoryItem;
            });

            // console.log(pendingList);

            return{
                ...state,
                categoryList: pendingList
            };
        case 'SELECT_CAT_CHANGE':
            currentCat = state.categoryList.filter(item => item.categoryId === action.id)[0];
            console.log(currentCat);
            currentCat.selectedOption = action.option ? action.option : null;
            relationships = [];
            //state.userAction === 'add' ? [] : state.relationships;

            state.categoryList.map(item => {
                if (item.selectedOption && item.selectedOption.length > 0){ //Multiple selections
                    console.log(item.selectedOption);
                    item.selectedOption.map(subItem => {
                        relationships.push(subItem.subCategoryId);
                    });
                }
            });

            relationships = relationships.filter((item, index) => relationships.indexOf(item) === index);
            console.log('add: ' + relationships);

            return{
                ...state,
                categoryList: state.categoryList,
                relationships: relationships,
                selectedCatId: action.option[0].parentId
            }; 
        case 'SELECT_CAT_CHANGE_NULL':
            console.log(action.id);
            currentCat = state.categoryList.filter(item => item.categoryId === action.id)[0];
            currentCat.selectedOption = null;
            
            relationships = [];

            state.categoryList.map(item => {
                if (item.selectedOption && item.selectedOption.length > 0){ //Multiple selections
                    console.log(item.selectedOption);
                    item.selectedOption.map(subItem => {
                        relationships.push(subItem.subCategoryId);
                    });
                }
            });

            relationships = relationships.filter((item, index) => relationships.indexOf(item) === index);
            console.log('remove: ' + relationships);

            return{
                ...state,
                categoryList: state.categoryList,
                relationships: relationships
            }; 
        case 'ERROR_RELATIONSHIP': 
            return{
                ...state,
                relationshipsError: 'Please select the associated company and required categories.'
            }
        case 'SELECT_CONNECTION_COMPANY_CHANGE':
            // console.log(action.option);
            let checkExist = state.tempConnections.filter(e => e.id === action.option.value).length;
            // console.log(checkExist);

            if (checkExist > 0){
                selectedConnection = state.tempConnections.filter(item => item.id === action.option.value)[0];
                relationships = [];

                console.log(selectedConnection);

                Object.keys(selectedConnection.category).map(cat => {
                    selectedOption = [];
                    selectedConnection.category[cat]['sub_category'].map((subRow, subindex) => {
                    relationships.push(subRow.id);
                    currentCat = state.categoryList.filter(item => item['categoryId'].toString() === cat)[0];
                    // console.log(state.categoryList);
                    console.log(subRow);
                    
                    if (currentCat){
                        let selectedItem = {
                            'subCategoryId': subRow['category_id'],
                            'subCategoryName': subRow['category_name'],
                            'parentId': selectedConnection.category[cat]['category_id'],
                            'label':  subRow['category_name'],
                            'value': subRow['category_id']
                        };
                        selectedOption.push(selectedItem);
                        currentCat['selectedOption'] = selectedOption;
                    }
                  })
                });
    
                
            }

            return{
                ...state,
                connectionCompanyId: action.option ? action.option.value : null,
                selectedConnectionID: checkExist > 0 ? action.option.value : '',
                selectedConnection: checkExist > 0 ? selectedConnection : [],
                relationships: relationships,
                userAction: checkExist > 0 ? 'edit' : 'add'
            }
        case 'SELECT_CONNECTION_COMPANY_CHANGE_NULL':
            return{
                ...state,
                connectionCompanyId: null
            }
        case 'ADD_RELATIONSHIP': 
            state.categoryList.length > 0 && state.categoryList.map((item, index) => {
                item['selectedOption'] = null;
            });

            return{
                ...state, 
                connectionCompanyId: null,
                start_time: '',
                end_time: '',
                userAction: 'add'
            }
        case 'EDIT_RELATIONSHIP':

            selectedConnection = state.tempConnections.filter(item => item.id === action.currentId)[0];
            relationships = [];

            console.log(selectedConnection);

            Object.keys(selectedConnection['category']).map(catKey => {
                selectedOption = [];
                selectedConnection['category'][catKey]['sub_category'].map((subRow, index) => {
                relationships.push(subRow['category_id']);
                currentCat = state.categoryList.filter(item => item.categoryId.toString() === catKey);
                
                let selectedItem = {
                    'subCategoryId': subRow['category_id'],
                    'subCategoryName': subRow['category_name'],
                    'parentId': index,
                    'label':  subRow['category_name'],
                    'value': subRow['category_id']
                };
                selectedOption.push(selectedItem);

                currentCat.map(item => {
                    Object.keys(item).map(subitem => {
                        // console.log(subitem);
                        if (subitem === 'selectedOption'){
                            item['selectedOption'] = selectedOption;
                            // console.log(item['selectedOption']);
                        }
                    })
                });

                // console.log(state.categoryList);
              })
            });

            return{
                ...state,
                selectedConnectionID: action.currentId,
                connectionCompanyId: selectedConnection.id,
                selectedConnection: selectedConnection,
                relationships: relationships,
                userAction: 'edit'
            };
        case 'REMOVE_RELATIONSHIP':

            currentId = action.currentId;

            return{
                ...state,
                connectionCompanyId: currentId,
                userAction: 'remove'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                start_time: action.date ? action.date : ''
            };
        case 'SET_END_DATE': 
            return{
                ...state,
                end_time: action.date ? action.date: ''
            }
        case 'SET_CONNECTION_START_DATE':
            console.log(state.selectedConnection);
            console.log(action.date);

            return{
                ...state,
                selectedConnection: {
                    ...state.selectedConnection,
                    start_time: action.date ? action.date : ''
                }
            }
        
        case 'SET_CONNECTION_END_DATE':
            console.log(state.selectedConnection);
            console.log(action.date);

            return{
                ...state,
                selectedConnection: {
                    ...state.selectedConnection,
                    end_time: action.date ? action.date : ''
                }
            }
        case 'INIITAL_ALL_NODE': 
            return{
                ...state,
                nodes: action.nodes ? action.nodes : [],
                edges: action.edges ? action.edges : []
            };
        default: 
            console.log("error");
            return{
                ...state
            };   
    }
}
 
export default ProfileReducer;