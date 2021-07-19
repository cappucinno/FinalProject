// GET OPTIONS
export const LandlineOptionAction = payload => {
  return {type: 'GET_OPTION_LANDLINE', payload};
};

// GET OPTIONS
export const LandlineOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_LANDLINE_SUCCESS', payload};
};

// GET ACCOUNT LANDLINE
export const LandlineAccountAction = payload => {
  return {type: 'GET_ACCOUNT_LANDLINE', payload};
};

// GET ACCOUNT LANDLINE
export const LandlineAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_LANDLINE_SUCCESS', payload};
};

// CREATE PAYMENT INTV
export const LandlineCreatePaymentAction = payload => {
  return {type: 'CREATE_INTV_PAYMENT', payload};
};

// GET ACCOUNT INTV
export const LandlineCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_INTV_PAYMENT_SUCCESS', payload};
};
