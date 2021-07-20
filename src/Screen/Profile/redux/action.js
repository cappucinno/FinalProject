// GET OPTIONS
export const ProfileOptionAction = payload => {
  return {type: 'GET_OPTION_PROFILE', payload};
};

// GET OPTIONS
export const ProfileOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_PROFILE_SUCCESS', payload};
};

// GET ACCOUNT PROFILE
export const ProfileAccountAction = payload => {
  return {type: 'GET_ACCOUNT_PROFILE', payload};
};

// GET ACCOUNT PROFILE
export const ProfileAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_PROFILE_SUCCESS', payload};
};

// CREATE PAYMENT PROFILE
export const ProfileCreatePaymentAction = payload => {
  return {type: 'CREATE_PROFILE_PAYMENT', payload};
};

// GET ACCOUNT PROFILE
export const ProfileCreatePaymentActionSuccess = payload => {
  return {type: 'CREATE_PROFILE_PAYMENT_SUCCESS', payload};
};
