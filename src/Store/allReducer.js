import {combineReducers} from 'redux';
import GlobalReducer from './GlobalReducer';
import SignupReducer from '../Screen/SignUp/redux/reducer';
import LoginReducer from '../Screen/Login/redux/reducer';
import inTvReducer from '../Screen/InternetTv/redux/reducer';
import MobileReducer from '../Screen/Mobile/redux/reducer';

export const allReducer = combineReducers({
  GlobalReducer: GlobalReducer,
  SignupReducer: SignupReducer,
  LoginReducer: LoginReducer,
  inTvReducer: inTvReducer,
  MobileReducer: MobileReducer,
});
