import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  LandlineOptionActionSuccess,
  LandlineAccountActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// POST ID LANDLINE
const LandlineUserId = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/landline/bill/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST ID LANDLINE
function* LandlineUserIdAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionLoading(true));
    const res = yield LandlineUserId(action.payload, token);
    console.log(res, '<=======ini hasil user Landline Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User Landline');

      yield put(LandlineAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('DetailPaymentLandline');
    } else if (res.status === 204) {
      yield put(actionSuccess(false));
      yield put(actionIsLogged(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } catch (err) {
    if (err.response === 401) {
      yield put(actionIsLogged(false));
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    } else {
      console.log(err.response.data.message, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

function* LandlineSaga() {
  yield takeLatest('GET_ACCOUNT_LANDLINE', LandlineUserIdAction);
}

export default LandlineSaga;
