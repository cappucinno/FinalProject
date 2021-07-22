const initialState = {
  dataPeriodBPJS: [],
  dataUserBPJS: [],
  resBillBPJS: [],
  dataOptionElectricity: [],
  priceListElectricity: [],
  dataUserElectricity: [],
  resBillElectricity: [],
  dataOptionInternetTV: [],
  dataUserInternetTV: [],
  resBillInternetTV: [],
  dataUserLandline: [],
  resBillLandline: [],
  dataOptionMobile: [],
  dataUserMobile: [],
  resBillMobile: [],
  dataOptionPDAM: [],
  dataUserPDAM: [],
  resBillPDAM: [],
};

const newSubReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BPJS_PERIOD':
      return {
        ...state,
      };

    case 'GET_BPJS_PERIOD_SUCCESS':
      return {
        ...state,
        dataPeriodBPJS: action.payload,
      };

    case 'GET_ACCOUNT_BPJS':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_BPJS_SUCCESS':
      return {
        ...state,
        dataUserBPJS: action.payload,
      };

    case 'CREATE_BPJS_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_BPJS_PAYMENT_SUCCESS':
      return {
        ...state,
        resBillBPJS: action.payload,
      };
    case 'GET_OPTION_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_OPTION_ELECTRICITY_SUCCESS':
      return {
        ...state,
        dataOptionElectricity: action.payload,
      };

    case 'GET_TOKEN_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_TOKEN_ELECTRICITY_SUCCESS':
      return {
        ...state,
        priceListElectricity: action.payload,
      };

    case 'GET_TOKEN_ACCOUNT_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_TOKEN_ACCOUNT_ELECTRICITY_SUCCESS':
      return {
        ...state,
        dataUserElectricity: action.payload,
      };

    case 'GET_TAGIHAN_ACCOUNT_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_TAGIHAN_ACCOUNT_ELECTRICITY_SUCCESS':
      return {
        ...state,
        dataUserElectricity: action.payload,
      };

    case 'CREATE_TOKEN_ELECTRICITY_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_TOKEN_ELECTRICITY_PAYMENT_SUCCESS':
      return {
        ...state,
        resBillElectricity: action.payload,
      };

    case 'CREATE_TAGIHAN_ELECTRICITY_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_TAGIHAN_ELECTRICITY_PAYMENT_SUCCESS':
      return {
        ...state,
        resBillElectricity: action.payload,
      };
    case 'GET_OPTION_INTV':
      return {
        ...state,
      };

    case 'GET_OPTION_INTV_SUCCESS':
      return {
        ...state,
        dataOptionInternetTV: action.payload,
      };

    case 'GET_ACCOUNT_INTV':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_INTV_SUCCESS':
      return {
        ...state,
        dataUserInternetTV: action.payload,
      };

    case 'CREATE_INTV_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_INTV_PAYMENT_SUCCESS':
      return {
        ...state,
        resBillInternetTV: action.payload,
      };
    case 'GET_ACCOUNT_LANDLINE':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_LANDLINE_SUCCESS':
      return {
        ...state,
        dataUserLandline: action.payload,
      };

    case 'CREATE_LANDLINE_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_LANDLINE_PAYMENT_SUCCESS':
      return {
        ...state,
        resBillLandline: action.payload,
      };
    case 'GET_OPTION_MOBILE':
      return {
        ...state,
      };

    case 'GET_OPTION_MOBILE_SUCCESS':
      return {
        ...state,
        dataOptionMobile: action.payload,
      };

    case 'GET_ACCOUNT_MOBILE':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_MOBILE_SUCCESS':
      return {
        ...state,
        dataUserMobile: action.payload,
      };

    case 'CREATE_MOBILE_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_MOBILE_PAYMENT_SUCCESS':
      return {
        ...state,
        resBillMobile: action.payload,
      };
    case 'GET_OPTION_PDAM':
      return {
        ...state,
      };

    case 'GET_OPTION_PDAM_SUCCESS':
      return {
        ...state,
        dataOptionPDAM: action.payload,
      };

    case 'GET_ACCOUNT_PDAM':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_PDAM_SUCCESS':
      return {
        ...state,
        dataUserPDAM: action.payload,
      };

    case 'CREATE_PDAM_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_PDAM_PAYMENT_SUCCESS':
      return {
        ...state,
        resBillPDAM: action.payload,
      };
    default:
      return state;
  }
};

export default newSubReducer;
