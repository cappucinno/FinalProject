// GET OPTIONS
export const ElectricityOptionAction = payload => {
  return {type: 'GET_OPTION_ELECTRICITY', payload};
};

// GET OPTIONS
export const ElectricityOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_ELECTRICITY_SUCCESS', payload};
};

// GET ACCOUNT ELECTRICITY
export const ElectricityAccountAction = payload => {
  return {type: 'GET_ACCOUNT_ELECTRICITY', payload};
};

// GET ACCOUNT ELECTRICITY
export const ElectricityAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_MOBILE_ELECTRICITY', payload};
};
