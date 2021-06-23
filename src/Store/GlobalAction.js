export const actionLoading = payload => {
  return {
    type: 'SET_LOADING',
  };
};

export const actionSuccess = payload => {
  return {
    type: 'SET_SUCCESS',
  };
};

export const actionIsLogged = payload => {
  return {
    type: 'SET_IS_LOGGED',
  };
};

export const actionIsLoggout = payload => {
  return {
    type: 'SET_IS_LOGOUT',
  };
};
