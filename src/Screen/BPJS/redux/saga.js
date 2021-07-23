import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {PeriodBPJSActionSuccess} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET PERIOD BPJS
const BPJSPeriod = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/period',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS
function* BPJSPeriodAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield BPJSPeriod(action.payload, token);
    console.log(action.payload, '<=======ini hasil BPJS Period Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Period BPJS');

      yield put(PeriodBPJSActionSuccess(res.data));
      yield put(actionLoading(false));
    }
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data BPJS Period ');

      yield put(PeriodBPJSActionSuccess(res.data));
      yield put(actionSuccess(true));
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    } else if (res.status === 204) {
      yield put(actionSuccess(false));
      yield put(actionIsLogged(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } catch (err) {
    if (err.response.status === 401) {
      console.log(err.response.status, 'Gagal Mengambil data');
      yield put({type: 'SET_IS_LOGOUT'});
      yield put(actionLoading(false));
      ToastAndroid.show(
        'Seission Anda Telah Habis, silahkan login kembali',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      console.log(err.response, 'Gagal Mengambil data');
      yield put(actionLoading(false));
    }
  }
}

function* BPJSSaga() {
  yield takeLatest('GET_PERIOD_BPJS', BPJSPeriodAction);
}
export default BPJSSaga;
