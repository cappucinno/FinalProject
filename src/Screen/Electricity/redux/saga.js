import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  ElectricityOptionActionSuccess,
  ElectricityTokenActionSuccess,
  ElectricityAccountActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET OPTIONS
const ElectricityOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/options/1',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS
function* ElectricityOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionLoading(true));
    const res = yield ElectricityOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option Electricity API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option Electricity');

      yield put(ElectricityOptionActionSuccess(res.data));
      yield put(actionLoading(false));
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

// GET Token
const ElectricityToken = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/token/blank',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET TOKEN
function* ElectricityTokenAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionLoading(true));
    const res = yield ElectricityToken(action.payload, token);
    console.log(action.payload, '<=======ini hasil List Token Electricity API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data List Token Electricity');

      yield put(ElectricityTokenActionSuccess(res.data));
      yield put(actionLoading(false));
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

// GET User Elect Token
const ElectricityUserToken = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/token/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET User Elect Token
function* ElectricityAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionLoading(true));
    const res = yield ElectricityUserToken(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Token Electricity API',
    );
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Token Electricity');

      yield put(ElectricityAccountActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('DetailPaymentElectricity', 'PLN - Token');
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

function* ElectricitySaga() {
  yield takeLatest('GET_OPTION_ELECTRICITY', ElectricityOptionAction);
  yield takeLatest('GET_TOKEN_ELECTRICITY', ElectricityTokenAction);
  yield takeLatest('GET_ACCOUNT_ELECTRICITY', ElectricityAccountAction);
}

export default ElectricitySaga;
