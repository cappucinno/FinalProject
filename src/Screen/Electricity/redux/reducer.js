const initialState = {
  dataOption: [],
  priceList: [],
  dataUser: [],
};

const ElectricityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_OPTION_ELECTRICITY_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_TOKEN_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_TOKEN_ELECTRICITY_SUCCESS':
      return {
        ...state,
        priceList: action.payload,
      };

    case 'GET_TAGIHAN_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_TAGIHAN_ELECTRICITY_SUCCESS':
      return {
        ...state,
        priceList: action.payload,
      };

    case 'GET_ACCOUNT_ELECTRICITY':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_ELECTRICITY_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };
    default:
      return state;
  }
};

export default ElectricityReducer;
