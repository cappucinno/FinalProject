import {combineReducers} from 'redux';
import {GlobalReducer} from './GlobalReducer';

export const allReducer = combineReducers({
  GlobalReducer: GlobalReducer,
});
