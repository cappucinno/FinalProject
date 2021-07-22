// GET OPTIONS
export const PeriodBPJSAction = payload => {
  return {type: 'GET_PERIOD_BPJS', payload};
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

// CREATE PAYMENT INTV
export const inTvCreatePaymentAction = payload => {
  return {type: 'CREATE_INTV_PAYMENT', payload};
};

// GET ACCOUNT INTV
export const inTvCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_INTV_PAYMENT_SUCCESS', payload};
};
