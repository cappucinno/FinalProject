import {all} from 'redux-saga/effects';
import SagaSignup from '../Screen/SignUp/redux/saga';
import loginSaga from '../Screen/Login/redux/saga';
import inTvOptionSaga from '../Screen/InternetTv/redux/saga';
import MobileSaga from '../Screen/Mobile/redux/saga';
import LandlineSaga from '../Screen/Landline/redux/saga';
import PDAMSaga from '../Screen/PDAM/redux/saga';
import ElectricitySaga from '../Screen/Electricity/redux/saga';
import BankSaga from '../Screen/PaymentMethod/redux/saga';
import HistorySaga from '../Screen/History/redux/saga';
<<<<<<< HEAD
import ProfileSaga from '../Screen/Profile/redux/saga';
=======
import newSubOptionSaga from '../Screen/NewSubcription/redux/saga';
import NotifSaga from '../Screen/Notification/redux/saga';
>>>>>>> 086e0f02a50244b7b818015c33a1074ce80414ac

export function* SagaWacther() {
  yield all([
    SagaSignup(),
    loginSaga(),
    inTvOptionSaga(),
    MobileSaga(),
    LandlineSaga(),
    PDAMSaga(),
    ElectricitySaga(),
    BankSaga(),
    HistorySaga(),
    ProfileSaga(),
    newSubOptionSaga(),
    NotifSaga(),
  ]);
}
