const initialState = {
  dataPeriod: [],
};

const BPJSReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PERIOD_BPJS':
      return {
        ...state,
      };

    case 'GET_PERIOD_BPJS_SUCCESS':
      return {
        ...state,
        dataPeriod: action.payload,
      };

    default:
      return state;
  }
};

export default BPJSReducer;
