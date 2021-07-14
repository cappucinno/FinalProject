const initialState = {
  dataOption: [],
  dataUser: [],
};

const inTvOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_INTV':
      return {
        ...state,
      };

    case 'GET_OPTION_INTV_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_INTV':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_INTV_SUCCESS':
      return {
        ...state,
        dataUser: action.payload,
      };
    default:
      return state;
  }
};

export default inTvOptionReducer;
