// GET OPTIONS
export const GetHistoryAction = payload => {
  return {type: 'GET_HISTORY', payload};
};

// GET OPTIONS
export const GetHistoryActionSuccess = payload => {
  return {type: 'GET_HISTORY_SUCCESS', payload};
};
