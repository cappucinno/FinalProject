const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const HistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_HISTORY':
      return {
        ...state,
      };

    case 'GET_OPTION_HISTORY_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_HISTORY':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_HISTORY_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_HISTORY_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_HISTORY_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default HistoryReducer;
