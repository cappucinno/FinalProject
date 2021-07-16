const initialState = {
  dataOption: [],
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
