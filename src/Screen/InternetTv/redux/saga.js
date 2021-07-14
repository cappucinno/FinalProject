import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {inTvOptionActionSuccess, inTvAccountActionSuccess} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET OPTIONS
const inTvOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/internet_TV/options/3',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS
function* inTvOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield inTvOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Optipn INTV Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option InTv');

      yield put(inTvOptionActionSuccess(res.data));
      yield put(actionLoading(false));
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

// POST User_ID Internet Tv
const inTvUserId = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/internet_TV/information',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST User_ID Internet Tv
function* inTvUserIdAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield inTvUserId(action.payload, token);
    console.log(res, '<=======ini hasil user INTV Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User InTv');

      yield put(inTvAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('DetailPaymentInternetTv');
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

function* inTvOptionSaga() {
  yield takeLatest('GET_OPTION_INTV', inTvOptionAction);
  yield takeLatest('GET_ACCOUNT_INTV', inTvUserIdAction);
}
export default inTvOptionSaga;
