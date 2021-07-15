// GET OPTIONS
export const inTvOptionAction = payload => {
  return {type: 'GET_OPTION_INTV', payload};
};

// GET OPTIONS
export const inTvOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_INTV_SUCCESS', payload};
};

// GET ACCOUNT INTV
export const inTvAccountAction = payload => {
  return {type: 'GET_ACCOUNT_INTV', payload};
};

// GET ACCOUNT INTV
export const inTvAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_INTV_SUCCESS', payload};
};
