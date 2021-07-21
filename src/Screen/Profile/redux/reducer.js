const initialState = {
  dataOption: [],
  dataUser: [],
  resBill: [],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OPTION_PROFILE':
      return {
        ...state,
      };

    case 'GET_OPTION_PROFILE_SUCCESS':
      return {
        ...state,
        dataOption: action.payload,
      };

    case 'GET_ACCOUNT_PROFILE':
      return {
        ...state,
      };

    case 'GET_ACCOUNT_INTV_PROFILE':
      return {
        ...state,
        dataUser: action.payload,
      };

    case 'CREATE_PROFILE_PAYMENT':
      return {
        ...state,
      };

    case 'CREATE_INTV_PROFILE_SUCCESS':
      return {
        ...state,
        resBill: action.payload,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
