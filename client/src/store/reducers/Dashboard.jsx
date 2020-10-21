const DashboardReducer = (state, action) => {
    const { type } = action;

    let dashboardData = {};
    let totalGroupCompanies = 0;
    let totalChainCompanies = 0;
    let totalRelationships = 0;
    let totalSuppliers = 0;
    let totalBuyers = 0;
    let totalTiers = 0;
    let totalValidated = 0;

    switch (type){

        case 'INITIAL_DASHBOARD_DATA':
            let affiliation = action.dashboardData['relationships'] && action.dashboardData['relationships'].length > 0 ? action.dashboardData['relationships'].filter(item => item.name === "Affiliation") : '';
            
            let buyerNum = affiliation && affiliation['sub'].length > 0 ? affiliation['sub'].filter(item => item.name === "Buyer") : '';
            totalBuyers = buyerNum ? buyerNum['count']: 0;
            
            let supplierNum = affiliation && affiliation['sub'].length > 0 ? affiliation['sub'].filter(item => item.name === "Supplier") : '';
            totalSuppliers = supplierNum ? supplierNum[0]['count']: 0;
            
            totalGroupCompanies = action.dashboardData['group_companies'] ? action.dashboardData['group_companies']['count'] : 0;
            totalChainCompanies = action.dashboardData['chain_companies'] ? action.dashboardData['chain_companies']['count'] : 0; 
            totalRelationships = action.dashboardData['total_relationships'] ? action.dashboardData['total_relationships']['count'] : 0;
            totalValidated = action.dashboardData['failed'] ? action.dashboardData['failed']['count'] : 0;
            
            return{
                ...state,
                dashboardData: action.dashboardData,
                totalGroupCompanies: totalGroupCompanies,
                totalChainCompanies: totalChainCompanies,
                totalRelationships: totalRelationships,
                totalBuyers: totalBuyers,
                totalSuppliers: totalSuppliers,
                totalValidated: totalValidated
            };
        default: 
            console.log("error");
            return{
                ...state
            };   
    }
}
 
export default DashboardReducer;