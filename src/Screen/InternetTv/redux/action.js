// GET OPTIONS
export const inTvOptionAction = payload => {
  return {type: 'GET_OPTION_INTV', payload};
};

export const inTvOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_INTV_SUCCESS', payload};
};

export const inTvOptionActionFailed = payload => {
  return {type: 'GET_OPTION_INTV_FAILED', payload};
};

// GET ACCOUNT INTV
export const inTvAccountAction = payload => {
  return {type: 'GET_ACCOUNT_INTV', payload};
};
