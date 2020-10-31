import moment from 'moment';
import { searchTypes, companySizes, revenues, defaultCounterparties } from '../data/dropdownOptions';

export const hasNumber = string => /\d/.test(string);

export const hasLowerCase = string => /[a-z]/.test(string);

export const hasUpperCase = string => /[A-Z]/.test(string);

export const hasEightChars = string => string.length >= 8;

export const hasNoSpecialChar = string => /^[a-z0-9]+$/i.test(string);

export const isWeekday = date => {
  const day = moment(date).weekday();
  return day !== 0 && day !== 6;
};

export const toPercentage = decimal => decimal * 100;

export const toDecimal = percentage => 1 / percentage;

export const toCurrency = decimal =>
  Number.parseFloat(decimal)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const toUTC8FormatDDMMMYYYY = date => {
  return moment(date)
    .utcOffset(8)
    .format('YYYY-MM-DD hh:mm:ss');
}

export const convertISOToDatetime = stringDate => {
  var parts = stringDate.match(/\d+/g);
  return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
}

export const checkAndConvertDate = date => {
  let formattedDate = date;
  // console.log(JSON.stringify(date));
  if (date && typeof(date) === 'string' && !date.includes('GMT')){   //ISO String
    let parts = date.match(/\d+/g);
    formattedDate = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]); //Convert to GMT
  }

  return formattedDate;
}

export const maxDigitDecimal = (number, digit, decimal) =>
  number
    .toString()
    .split('.')
    .map((element, index) => {
      if (index) {
        return element
          .split('')
          .slice(0, decimal)
          .join('');
      }
      if (element.length > digit) {
        return element
          .split('')
          .slice(0, digit)
          .join('');
      }
      return element;
    })
    .join('.');

export const dataURItoBlob = dataURI => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  const ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  const blob = new Blob([ab], { type: mimeString });
  return blob;
};

export const mappedCompanySizes = companySizes.map(item => ({
  label: item.label,
  value: item.label,
  min: item.min,
  max: item.max,
  type: 'companySizes'
}));

export const mappedDropdown = (data, type) => {
  if (data) return data.map(item => ({
    label: item,
    value: item,
    type: type
  }))
};

export const mappedAffiliationTypes = (data) => {
  // console.log(data);
  return data.map(item => ({
    label: item.name,
    value: item.name,
    type: 'affiliationTypes'
  }));
};

export const mappedRelationshipTypes = (data) => {
  // console.log(data);
  return data.map(item => ({
    label: item.name,
    value: item.name,
    type: 'affiliationTypes'
  }));
};

export const mappedDBFields = (data) => {
  
  let newData = data.map(item => ({
    label: item,
    value: item
  }));

  return newData;

};

export const flatten = object => {
  return Object.assign( {}, ...function _flatten( objectBit, path = '' ) {  //spread the result into our return object
    return [].concat(
      // //concat everything into one level
      ...Object.keys( objectBit ).map(
        key => typeof objectBit[ key ] === 'object' && objectBit[key] !== undefined && objectBit[key] !== null ?             //check if there is a nested object
          _flatten( objectBit[ key ], `${ path }_${ key }` ) :              //call itself if there is
          ( { [ `${ path }_${ key }` ]: objectBit[ key ] } )
        )
    )
  }( object ) );
};

export const checkParamsIndex = match => searchTypes.map(e => e.value).indexOf(match.params.type);
export const checkParamsKeyword = match => match.params.keyword !== undefined ? match.params.keyword : '';
export const checkParamsDropdown = match => {
  let tmpOption = null;
  if (match.params.keyword !== undefined && match.params.dataType === 'select'){
    let array = match.params.keyword.split("+");

    tmpOption = array.map(o => ({barId: 0, label: o, value: o}));
  }
  return tmpOption;
}
export const checkParamsSubDropdown = match => {
  let tmpOption = null;
  
  if (match.params.subType !== undefined && match.params.subKeyword !== undefined){
    let array = match.params.subKeyword.split(",");
    tmpOption = array.map(o => ({barId: 0, label: o, value: o}));
  }
  return tmpOption;
}

export const calcPageIndex = (currentPage, pageSize) => {
  return (currentPage)*pageSize
};

export const formatInCorpDate = (date) => {

  let formattedDate = date;

  if (date.length === 4){
      formattedDate = `01/01/${date}`;
  }else if (date.length === 7){
      formattedDate = `01/${date}`;
  }else if (date.length === 0){
      formattedDate = `/`;
  }
  return formattedDate;
}

export const calcRevenue = num => {

  let formattedNum = num / 1000;
  let x = String(formattedNum).indexOf('.') + 1;   //before .
  let y = String(formattedNum).length - x;  //after .

  if(y > 1){
    return formattedNum.toFixed(1);
  }else{
    return formattedNum;
  }
}

export const totalPages = (totalCount, pageSize) => {
  let pages = Math.ceil(totalCount / pageSize);
  return pages;
};

export const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');

export const changeKeyToTitle = key => {
  let mapObj = {
    '_0_': '',
    '_': '',
    '0': ' 0 ',
    '1': ' 1 ',
    '2': ' 2 ',
    '3': ' 3 ',
    '4': ' 4 ',
    '5': ' 5 ',
    '6': ' 6 ',
    '7': ' 7 ',
    '8': ' 8 ',
    '9': ' 9 ',
    'id': 'ID',
    'name1EnglishLanguage': 'Company Name',
    'telephoneNumber': 'Telephone Number',
    'incorporationDate': 'Date of Incorporation ',
    'countryNodename': 'Country',
    'countryNodeisoCode': 'Country Code',
    'employeeCount': 'Employee',
    'networkConnectionsTotal': 'Total of Network Connections',
    'operatingRevenueInUSD': 'Revenue (USD)',
    'citynameEnglish': ' City',
    'website': 'Website',
    'RefCompany': '',
    'network': 'Network ',
    'from': ' From ',
    'to': ' To ',
    'buysHs': 'Product Bought ',
    'sellsHs': 'Product Sold ',
    'number': 'HS Code',
    'description': ' Description',
    'hsCodes': ' HS Codes',
    'buyerSellerConnections': 'Product Details'
  }
  let changedKey = key.replace(/_0_|_|1|2|3|4|5|6|7|8|9|id|name1EnglishLanguage|telephoneNumber|incorporationDate|countryNodename|countryNodeisoCode|citynameEnglish|employeeCount|networkConnectionsTotal|operatingRevenueInUSD|citynameEnglish|website|RefCompany|network|from|to|buysHs|sellsHs|number|description|hsCodes|buyerSellerConnections/gi, function(matched){
    return mapObj[matched];
  });

  // console.log(changedKey);
  
  return changedKey;
}

export const changeNameToSlug = name => {
  let mapObj = {
      ' ': '-',
      '.': '',
      '(': '',
      ')': '',
      ',': '',
      '/': '',
      '"': ''
  };

  let slug = name.replace(/[ ]|[().,/"]/gi, function(matched){
     return mapObj[matched];
  });

  return slug;
}

export const changeSlugToID = name => {
  let id = name.split('_');
  return id[0];
}

export const changeSlugToIsSubCompany = name => {
  let id = name.split('_');
  return id[1];
}

export const formatCaptialize = name => {

  if (typeof(name) !== 'string') return name;

  let pieces = name.split(" ");
  if (pieces.length > 1) return name;

  for ( let i = 0; i < pieces.length; i++ ){
    let j = pieces[i].toLowerCase().substring(1);
    pieces[i] = pieces[i].charAt(0).toUpperCase() + j;
  }

    return pieces.join(" ");
}

export const countQL = (dataType, option, keyword) => {
  return dataType === 'select' ? changeObjToString(option, ',') : keyword;
}

export const changeObjToStringtify = (obj, sep) => { //change dropdown values to string with ","
  let key = ['value'];  
  return obj.map(o => JSON.stringify(o[key])).join(sep);
}

export const changeObjToString = (obj, sep) => { //change dropdown values to string with ","
  let key = ['value'];
  return obj.map(o => o[key]).join(sep);
}

export const removeQuotes= (optionStr) => {
  let mapObj = {'"': ''};
  let removeQutoes = optionStr.replace(/["]/gi, function(matched){
    return mapObj[matched];
  });

  return removeQutoes;
}

export const verifyEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const changeToSQL = optionStr => {
  let string = {
    "options": {
      "location": [
        "Portion A",
        "Portion A1",
        "Portion B",
        "Portion B1",
        "Portion B2",
        "Portion C",
        "Portion C1",
        "Portion C2",
        "Portion D",
        "Portion D1",
        "Portion D2",
        "Portion E",
        "Portion J15",
        "Portion J18"
      ],
      "works": [
        "Drainage",
        "Formwork",
        "Founding Condition",
        "Ground Investigation",
        "Pre-drilling",
        "PBSH",
        "Reinforcement",
        "Steelworks",
        "Setting Out",
        "Underground Records",
        "As-built Survey",
        "Other"
      ]
    }
  };
  let mapObj = {'"': '\"'};
  let changeQutoes = JSON.stringify(string).replace(/["]/gi, function(matched){
    return mapObj[matched];
  });

  console.log(changeQutoes);

  return changeQutoes;
}