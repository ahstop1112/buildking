export const searchTypes = [
  {
    label: 'Search By',
    value: null,
    dataType: '',
    orderBy: 'name_asc'
  },
  {
    label: 'Country',
    value: 'country',
    dataType: 'select',
    orderBy: 'name_asc'
  },
  {
    label: 'City',
    value: 'city',
    dataType: 'select',
    orderBy: 'name_asc'
  },
  {
    label: 'Company',
    value: 'company',
    dataType: 'keyword',
    orderBy: 'name_asc'
  },
  {
    label: 'Relationship Types',
    value: 'rs_relationshipTypes',
    dataType: 'select',
    orderBy: 'name_asc'
  },
  {
    label: 'Brands',
    value: 'rs_brands',
    dataType: 'select',
    orderBy: 'name_asc'
  },
  {
    label: 'Brand Types',
    value: 'rs_brandTypes',
    dataType: 'select',
    orderBy: 'name_asc'
  },
  {
    label: 'Supplier Types',
    value: 'rs_supplierTypes',
    dataType: 'select',
    orderBy: 'name_asc'
  },
  {
    label: 'Affiliation Types',
    value: 'rs_affiliation',
    dataType: 'select',
    orderBy: 'name_asc'
  },
  {
    label: 'Tier',
    value: 'tier',
    dataType: 'select',
    orderBy: 'name_asc'
  },
    {
      label: 'Website',
      value: 'website',
      dataType: 'keyword',
      searchType: 'hsString',
      orderBy: 'name_asc'
    }
];



export const companySizes = [
  {
    label: 'All',
    max: '',
    min: ''
  },
  {
    label: '0-50',
    min: 0,
    max: 50,
    
  },
  {
    label: '51-100',
    min: 51,
    max: 100
  },
  {
    label: '101-500',
    min: 101,
    max: 500
  },
  {
    label: '501-1,000',
    min: 501,
    max: 1000
  },
  {
    label: '1,001-10,000',
    min: 1001,
    max: 10000
  },
  {
    label: '10,000+',
    min: 10001,
    max: 1000000000
  }
];

export const revenues = [
  {
    label: 'All',
    max: '',
    min: ''
  },
  {
    label: '$0-10m',
    min: 0,
    max: 10,
  },
  {
    label: '$11-25m',
    min: 11,
    max: 25
  },
  {
    label: '$26-50m',
    min: 26,
    max: 50
  },
  {
    label: '$51-75m',
    min: 51,
    max: 75
  },
  {
    label: '$76-100m',
    min: 76,
    max: 100
  },
  {
    label: '$100m+',
    min: 101,
    max: 1000
  }
];

export const defaultLocation = [
  {
    label: "China", 
    value: "China", 
    type: "location"
  },{
    label: "Hong Kong", 
    value: "Hong Kong", 
    type: "location"
  },{
    label: "Italy", 
    value: "Italy", 
    type: "location"
  },{
    label: "Japan", 
    value: "Japan", 
    type: "location"
  },{
    label: "Malaysia", 
    value: "Malaysia", 
    type: "location"
  },{
    label: "Mauritius", 
    value: "Mauritius", 
    type: "location"
  },{
    label: "Singapore", 
    value: "Singapore", 
    type: "location"
  },{
    label: "South Korea", 
    value: "South Korea", 
    type: "location"
  },{
    label: "Sri Lanka", 
    value: "Sri Lanka", 
    type: "location"
  },{
    label: "Thailand", 
    value: "Thailand", 
    type: "location"
  },{
    label: "United Kingdom", 
    value: "United Kingdom", 
    type: "location"
  },{
    label: "United States", 
    value: "United States", 
    type: "location"
  },{
    label: "Vietnam", 
    value: "Vietnam", 
    type: "location"
  }];

export const defaultCounterparties = [
  {
    label: 1,
    value: 1,
    type: "counterparties"
  },{
    label: 2,
    value: 2,
    type: "counterparties"
  },{
    label: 3,
    value: 3,
    type: "counterparties"
  },{
    label: 4,
    value: 4,
    type: "counterparties"
  },{
    label: 5,
    value: 5,
    type: "counterparties"
  },{
    label: 6,
    value: 6,
    type: "counterparties"
  },{
    label: 7,
    value: 7,
    type: "counterparties"
  },{
    label: 8,
    value: 8,
    type: "counterparties"
  },{
    label: 10,
    value: 10,
    type: "counterparties"
  },{
    label: 12,
    value: 12,
    type: "counterparties"
  },{
    label: 13,
    value: 13,
    type: "counterparties"
  },{
    label: 14,
    value: 14,
    type: "counterparties"
  },{
    label: 15,
    value: 15,
    type: "counterparties"
  },{
    label: 22,
    value: 22,
    type: "counterparties"
  },{
    label: 28,
    value: 28,
    type: "counterparties"
  },{
    label: 41,
    value: 41,
    type: "counterparties"
  }
];

export const defaultTier = [
  {
    label: 0,
    value: 0,
    type: "tier"
  },{
    label: 1,
    value: 1,
    type: "tier"
  },{
    label: 2,
    value: 2,
    type: "tier"
}];

export const defaultAffiliation = [{
  label: "supplier",
  value: "supplier",
  type: "rs_affiliation"
},{
  label: "buyer",
  value: "buyer",
  type: "rs_affiliation"
}];