const initialState = {
  dataOption: [],
  dataUser: [],
};

const MobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_MOBILE':
      return {
        ...state,
      };

    case 'GET_OPTION_MOBILE_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_MOBILE':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_MOBILE_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };
    default:
      return state;
  }
};

export default MobileReducer;
