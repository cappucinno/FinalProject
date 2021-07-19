// GET OPTIONS
export const ElectricityOptionAction = payload => {
  return {type: 'GET_OPTION_ELECTRICITY', payload};
};

// GET OPTIONS
export const ElectricityOptionActionSuccess = payload => {
  return {type: 'GET_OPTION_ELECTRICITY_SUCCESS', payload};
};

// GET Token Price List
export const ElectricityTokenAction = payload => {
  return {type: 'GET_TOKEN_ELECTRICITY', payload};
};

// GET Token Price List
export const ElectricityTokenActionSuccess = payload => {
  return {type: 'GET_TOKEN_ELECTRICITY_SUCCESS', payload};
};

// GET Tagihan Price List
export const ElectricityTagihanAction = payload => {
  return {type: 'GET_TAGIHAN_ELECTRICITY', payload};
};

// GET Tagihan Price List
export const ElectricityTagihanActionSuccess = payload => {
  return {type: 'GET_TAGIHAN_ELECTRICITY_SUCCESS', payload};
};

// GET ACCOUNT ELECTRICITY
export const ElectricityAccountAction = payload => {
  return {type: 'GET_ACCOUNT_ELECTRICITY', payload};
};

// GET ACCOUNT ELECTRICITY
export const ElectricityAccountActionSuccess = payload => {
  return {type: 'GET_ACCOUNT_ELECTRICITY_SUCCESS', payload};
};
