// GET Bank Account
export const BankAccountAction = payload => {
  return {type: 'GET_BANK_ACCOUNT', payload};
};

// GET Bank Account
export const BankAccountActionSuccess = payload => {
  return {type: 'GET_BANK_ACCOUNT_SUCCESS', payload};
};

// SAVE PAYMENT METHOD
export const SavePaymentMethodAction = payload => {
  return {type: 'SAVE_PAYMENT_METHOD', payload};
};
