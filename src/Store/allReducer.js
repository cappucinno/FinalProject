import {combineReducers} from 'redux';
import GlobalReducer from './GlobalReducer';
import SignupReducer from '../Screen/SignUp/redux/reducer';
import LoginReducer from '../Screen/Login/redux/reducer';
import inTvOptionReducer from '../Screen/InternetTv/redux/reducer';
import MobileReducer from '../Screen/Mobile/redux/reducer';
import LandlineReducer from '../Screen/Landline/redux/reducer';
import PDAMReducer from '../Screen/PDAM/redux/reducer';

export const allReducer = combineReducers({
  GlobalReducer: GlobalReducer,
  SignupReducer: SignupReducer,
  LoginReducer: LoginReducer,
  inTvOptionReducer: inTvOptionReducer,
  MobileReducer: MobileReducer,
  LandlineReducer: LandlineReducer,
  PDAMReducer: PDAMReducer,
});
