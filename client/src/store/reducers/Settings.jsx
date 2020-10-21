
const SettingsReducer = (state, action) => {
    const { type } = action;

    let companyCountry = '';
    let companyCity= '';
    let existingCountryId = '';
    let existingCityId = '';

    switch (type){

        case 'SET_DEFAULT_VALUES':
            const userCompaniesCount = Object.keys(action.group.userCompanies).length;
            const relationshipTypes = action.group.relationshipTypes.reduce((map, row) => {
                map[row.name] = row.id;
                return map;
            }, {});
            const relationshipTypesCount = Object.keys(relationshipTypes).length;
            const supplierTypes = action.group.supplierTypes.reduce((map, row) => {
                map[row.name] = row.id;
                return map;
            }, {}); 
            const supplierTypesCount = Object.keys(supplierTypes).length;
            const brands = action.group.brands.reduce((map, row) => {
                map[row.name] = row.id;
                return map;
            }, {});          
            const brandsCount = Object.keys(brands).length;
            const brandTypes = action.group.brandTypes.reduce((map, row) => {
                map[row.name] = row.id;
                return map;
            }, {});
            const brandTypesCount = Object.keys(brandTypes).length;
            const buyerTypes = action.group.buyerTypes.reduce((map, row) => {
                map[row.name] = row.id;
                return map;
            }, {});          
            const buyerTypesCount = Object.keys(buyerTypes).length;
      
            if (action.group.city && action.group.city.id) { 
                companyCity = [{barId: "barId", label: action.group.city.nameEnglish, value: action.group.city.nameEnglish, cityId: action.group.city.id}];
                existingCityId = action.group.city.id;
            }
            if (action.group.countryNode && action.group.countryNode.id) {
                companyCountry = [{barId: "barId", label: action.group.countryNode.name, value: action.group.countryNode.name, countryId: action.group.countryNode.id}];
                existingCountryId =  action.group.countryNode.id
            }

            return{
                id:                     action.group.id,
                networkName:            action.group.networkName,
                companyName:            action.group.name,
                companyAddressLine1:    action.group.addressLine1,
                companyAddressLine2:    action.group.addressLine2,
                companyPhone:           action.group.telephoneNumber,
                companyEmail:           action.group.email,
                brandNames:             brands,
                brandTypes:             brandTypes,
                supplierTypes:          supplierTypes,
                relationshipTypes:      relationshipTypes,
                buyerTypes:             buyerTypes,
                brandNamesCount:        brandsCount,
                brandTypesCount:        brandTypesCount,
                supplierTypesCount:     supplierTypesCount,
                relationshipTypesCount: relationshipTypesCount,
                buyerTypesCount:        buyerTypesCount,
                numCompanies:           userCompaniesCount,
                companyCountry:         companyCountry,
                companyCity:            companyCity
            };
        case 'CHANGE_TEXTFIELD':
            return{
                ...state,
                [action.fieldName]: action.fieldValue,
            };
        case 'CHANGE_DROPDOWN':
            return{
                ...state,
                [action.target]: action.option,
            };
        case 'CHANGE_PENDING_TYPES': 
            return{
                ...state,
                ['pending_' + action.target]: action.fieldValue
            };
        case 'ADD_PENDING_TYPES': 
            const pendingInput = state['pending_' + action.target];
            const targetMap = (action.target in state) ? 
            {
                ...state[action.target],
                [pendingInput]: ''
            } : 
            {[pendingInput]: ''};
            return{
                ...state,
                [action.target]: targetMap,
                ['pending_' + action.target]: ''
            };
        case 'ADD_RELATIONSHIP_TYPES': 
            return{
                ...state,
                relationshipTypes: {
                    ...state.relationshipTypes,
                    [action.data.CreateRelationshipType.name]: action.data.CreateRelationshipType.id
                }
            };
        case 'ADD_BRAND_NAME': 
            return{
                ...state,
                brandNames: {
                    ...state.brandNames,
                    [action.data.CreateBrand.name]: action.data.CreateBrand.id
                }
            };
        case 'ADD_BRAND_TYPE': 
            return{
                ...state,
                brandTypes: {
                    ...state.brandTypes,
                    [action.data.CreateBrandType.name]: action.data.CreateBrandType.id
                }
            };
        case 'ADD_SUPPLIER_TYPE': 
            return{
                ...state,
                supplierTypes: {
                    ...state.supplierTypes,
                    [action.data.CreateSupplierType.name]: action.data.CreateSupplierType.id
                }
            };
        case 'ADD_BUYER_TYPE':
            return{
                ...state,
                buyerTypes: {
                ...state.buyerTypes,
                [action.data.CreateBuyerType.name]: action.data.CreateBuyerType.id
                }
            };
        case 'SET_USER_COMPANIES':

            let newUserCompanies = action.userCompanies.map((comp, id) => {
                if (comp.countryNode && comp.countryNode.name) {
                    comp.country = [{barId: "barId", label: comp.countryNode.name, value: comp.countryNode.name}];
                }
                if (comp.city && comp.city.nameEnglish) {
                    comp.city = [{barId: "barId", label: comp.city.nameEnglish, value: comp.city.nameEnglish}];
                }
                return comp;
            }, {});

            return{
                ...state,
                userCompanies: newUserCompanies
            };
        case 'SET_YOUR_SUPPLIERS': 
            let newYourSuppliers = action.yourSuppliers.map((comp, id) => {
                if (comp.countryNode && comp.countryNode.name) {
                    comp.country = [{barId: "barId", label: comp.countryNode.name, value: comp.countryNode.name}];
                    if (comp.city && comp.city.nameEnglish) {
                        comp.city = [{barId: "barId", label: comp.city.nameEnglish, value: comp.city.nameEnglish}];
                    }
                }
                return comp;
            }, {});

            return{
                ...state,
                yourSuppliers: newYourSuppliers
            };
        default: 
            // console.log("error");
            
            return{
                ...state
            };   
    }
}
 
export default SettingsReducer;