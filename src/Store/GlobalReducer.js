const initialState = {
  Loading: false,
  Success: false,
  isLogged: false,
  token: {},
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        Loading: action.payload,
      };
    case 'SET_SUCCESS':
      return {
        ...state,
        Success: action.payload,
      };

    case 'SET_IS_LOGGED':
      return {
        ...state,
        isLogged: true,
        token: action.payload.token,
      };
    case 'SET_IS_LOGOUT':
      return {
        ...state,
        isLogged: false,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export default globalReducer;
