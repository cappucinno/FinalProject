// GET OPTIONS
export const HistoryOptionAction = payload => {
  return {type: 'GET_OPTION_HISTORY', payload};
};

// GET OPTIONS
export const HistoryOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_HISTORY_SUCCESS', payload};
};

// GET ACCOUNT HISTORY
export const HistoryAccountAction = payload => {
  return {type: 'GET_ACCOUNT_HISTORY', payload};
};

// GET ACCOUNT HISTORY
export const HistoryAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_HISTORY_SUCCESS', payload};
};

// CREATE PAYMENT HISTORY
export const HistoryCreatePaymentAction = payload => {
  return {type: 'CREATE_HISTORY_PAYMENT', payload};
};

// GET ACCOUNT HISTORY
export const HistoryCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_HISTORY_PAYMENT_SUCCESS', payload};
};
