import {all} from 'redux-saga/effects';
import SagaSignup from '../Screen/SignUp/redux/saga';
import loginSaga from '../Screen/Login/redux/saga';
import inTvOptionSaga from '../Screen/InternetTv/redux/saga';
import MobileSaga from '../Screen/Mobile/redux/saga';
import LandlineSaga from '../Screen/Landline/redux/saga';
import PDAMSaga from '../Screen/PDAM/redux/saga';

export function* SagaWacther() {
  yield all([
    SagaSignup(),
    loginSaga(),
    inTvOptionSaga(),
    MobileSaga(),
    LandlineSaga(),
    PDAMSaga(),
  ]);
}
