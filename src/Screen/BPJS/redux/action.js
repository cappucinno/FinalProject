// GET OPTIONS
export const PeriodBPJSAction = payload => {
  return {type: 'GET_PERIOD_BPJS', payload};
};

// GET OPTIONS
export const PeriodBPJSActionSuccess = payload => {
  return {type: 'GET_PERIOD_BPJS_SUCCESS', payload};
};
