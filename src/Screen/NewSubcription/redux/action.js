// GET OPTIONS
export const newSubOptionAction = payload => {
  return {type: 'GET_OPTION_NEWSUB', payload};
};

// GET OPTIONS
export const newSubOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_NEWSUB_SUCCESS', payload};
};

// GET ACCOUNT NEW SUBSCRIPTION
export const newSubAccountAction = payload => {
  return {type: 'GET_ACCOUNT_NEWSUB', payload};
};

// GET ACCOUNT NEW SUBSCRIPTION
export const newSubAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_NEWSUB_SUCCESS', payload};
};

// CREATE PAYMENT NEW SUBSCRIPTION
export const newSubCreatePaymentAction = payload => {
  return {type: 'CREATE_NEWSUB_PAYMENT', payload};
};

// GET ACCOUNT NEW SUBSCRIPTION
export const newSubCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_NEWSUB_PAYMENT_SUCCESS', payload};
};
