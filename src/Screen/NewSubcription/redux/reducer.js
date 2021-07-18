const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const newSubReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_NEWSUB':
      return {
        ...state,
      };

    case 'GET_OPTION_NEWSUB_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_NEWSUB':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_NEWSUB_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_NEWSUB_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_NEWSUB_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default newSubReducer;
