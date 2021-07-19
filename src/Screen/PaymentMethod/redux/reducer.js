const initialState = {
  dataBank: [],
  paymentMethod: [],
};

const BankReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BANK_ACCOUNT':
      return {
        ...state,
      };

    case 'GET_BANK_ACCOUNT_SUCCESS':
      return {
        ...state,
        dataBank: action.payload,
      };
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};

export default BankReducer;
