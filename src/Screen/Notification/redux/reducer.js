const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const NotifReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_NOTIF':
      return {
        ...state,
      };

    case 'GET_OPTION_NOTIF_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_NOTIF':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_NOTIF_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_NOTIF_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_NOTIF_PAYMENT_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default NotifReducer;
