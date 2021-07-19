// GET OPTIONS
export const NotifOptionAction = payload => {
  return {type: 'GET_OPTION_NOTIF', payload};
};

// GET OPTIONS
export const NotifOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_NOTIF_SUCCESS', payload};
};

// GET ACCOUNT NOTIFICATION
export const NotifAccountAction = payload => {
  return {type: 'GET_ACCOUNT_NOTIF', payload};
};

// GET ACCOUNT NOTIFICATION
export const NotifAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_NOTIF_SUCCESS', payload};
};

// CREATE PAYMENT NOTIFICATION
export const NotifCreatePaymentAction = payload => {
  return {type: 'CREATE_NOTIF_PAYMENT', payload};
};

// GET ACCOUNT NOTIFICATION
export const NotifCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_NOTIF_PAYMENT_SUCCESS', payload};
};
