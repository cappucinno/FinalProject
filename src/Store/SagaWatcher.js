import {all} from 'redux-saga/effects';
import SagaSignup from '../Screen/SignUp/redux/saga';
import loginSaga from '../Screen/Login/redux/saga';

export function* SagaWacther() {
  yield all([SagaSignup(), loginSaga()]);
}
