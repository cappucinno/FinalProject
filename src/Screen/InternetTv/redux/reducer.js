const initialState = {
  data: [],
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
        data: action.payload,
      };

    case 'GET_OPTION_INTV_FAILED':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default inTvOptionReducer;
