import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  newSubOptionActionSuccess,
  newSubAccountActionSuccess,
  newSubCreatePaymentActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET OPTIONS
const newSubOptions = (payload, token) => {
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
function* newSubOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield newSubOptions(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Optipn NEW SUBSCRIPTION Api',
    );
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option NEW Subscription');

      yield put(newSubOptionActionSuccess(res.data));
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

// POST User_ID New Subscription
const newSubUserId = (payload, token) => {
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

// POST User_ID New Subscription
function* newSubUserIdAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield newSubUserId(action.payload, token);
    console.log(res, '<=======ini hasil user NEW SUBSCRIPTION Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User New Subscription');

      yield put(newSubAccountActionSuccess(res.data));
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

// POST Create Payment New Subscription
const newSubCreate = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/internet_TV/bill',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST User_ID New Subscription
function* newSubCreateAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield newSubCreate(action.payload, token);
    console.log(res, '<=======ini hasil CreateBill NEW SUBSCRIPTION Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Create Bill New Subscription');

      yield put(newSubCreatePaymentActionSuccess(res.data));
      yield put(actionSuccess(true));
      let methodPayment = 'Bank Transfer';
      methodPayment === 'Bank Transfer'
        ? yield navigate('ResultPaymentBankInternetTv')
        : methodPayment === 'Payment Card'
        ? yield navigate('ResultPaymentCreditInternetTv')
        : null;
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
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

function* newSubOptionSaga() {
  yield takeLatest('GET_OPTION_NEWSUB', newSubOptionAction);
  yield takeLatest('GET_ACCOUNT_NEWSUB', newSubUserIdAction);
  yield takeLatest('CREATE_NEWSUB_PAYMENT', newSubCreateAction);
}
export default newSubOptionSaga;
