import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  BpjsPeriodActionSuccess,
  BpjsAccountActionSuccess,
  BpjsCreatePaymentActionSuccess,
  ElectricityOptionActionSuccess,
  ElectricityTokenActionSuccess,
  ElectricityTokenAccountActionSuccess,
  ElectricityTagihanAccountActionSuccess,
  ElectricityTokenCreatePaymentActionSuccess,
  inTvOptionActionSuccess,
  inTvAccountActionSuccess,
  inTvCreatePaymentActionSuccess,
  LandlineAccountActionSuccess,
  LandlineCreatePaymentActionSuccess,
  MobileOptionActionSuccess,
  MobileAccountActionSuccess,
  MobileCreatePaymentActionSuccess,
  PDAMOptionActionSuccess,
  PDAMAccountActionSuccess,
  PDAMCreatePaymentActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET BPJS PERIOD
const BpjsPeriods = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/period',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET BPJS PERIOD
function* BpjsPeriodAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield BpjsPeriods(action.payload, token);
    console.log(action.payload, '<=======ini hasil BPJS API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Period BPJS');

      yield put(BpjsPeriodActionSuccess(res.data));
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

// GET ACCOUNT BPJS
const BpjsAccountId = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/customer/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET ACCOUNT BPJS
function* BpjsAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield BpjsAccountId(action.payload, token);
    console.log(res, '<=======ini hasil user account BPJS API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data user account BPJS API');

      yield put(BpjsAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('BPJSTransaction');
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

// POST Create Payment BPJS
const BpjsCreate = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/bpjs/bill/new/bill',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST Create Payment BPJS
function* BpjsCreatePaymentAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield BpjsCreate(action.payload, token);
    console.log(res, '<=======ini hasil CreateBill BPJS API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Create Bill BPJS API');

      yield put(BpjsCreatePaymentActionSuccess(res.data));
      yield put(actionSuccess(true));
      let methodPayment = 'Bank Transfer';
      methodPayment === 'Bank Transfer'
        ? yield navigate('BPJSTransaction')
        : methodPayment === 'Payment Card'
        ? yield navigate('BPJSTransaction')
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

// GET OPTIONS ELECTRICITY
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

// GET OPTIONS ELECTRICITY
function* ElectricityOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
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

// GET Token List Pay ELECTRICITY
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

//GET Token List Pay ELECTRICITY
function* ElectricityTokenAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
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

// GET User Elect Token ELECTRICITY
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

// GET User Elect Token ELECTRICITY
function* ElectricityTokenAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield ElectricityUserToken(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Token Electricity API',
    );
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Token Electricity');

      yield put(ElectricityTokenAccountActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('ElectricityTransaction', 'PLN - Token');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
    if (res.status === 204) {
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
      yield put(actionSuccess(false));
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// CREATE PAY Elect Token ELECTRICITY
const ElectricityCreatePayToken = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/token/bankpayment',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// CREATE PAY Elect Token
function* ElectricityTokenCreatePayAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield ElectricityCreatePayToken(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Token Electricity API',
    );
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Token Electricity');

      yield put(ElectricityTokenCreatePaymentActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('ElectricityTransaction', 'PLN - Token');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
    if (res.status === 204) {
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
      yield put(actionSuccess(false));
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// GET User Elect TAGIHAN
const ElectricityUserTagihan = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/electricity/bill/tagihan/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET User Elect TAGIHAN
function* ElectricityTagihanAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield ElectricityUserTagihan(action.payload, token);
    console.log(
      action.payload,
      '<=======ini hasil Get User Tagihan Electricity API',
    );
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Get User Tagihan Electricity');

      yield put(ElectricityTagihanAccountActionSuccess(res.data));
      yield put(actionLoading(false));
      yield navigate('ElectricityTransaction', 'PLN - Tagihan');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
    if (res.status === 204) {
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
      yield put(actionSuccess(false));
      console.log(err.response, 'Gagal Mengambil data');
      const errorMessage = err.response.data.message + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  } finally {
    yield put(actionLoading(false));
  }
}

// GET OPTIONS INTERNET & TV
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

// GET OPTIONS INTERNET & TV
function* inTvOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield inTvOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option INTV Api');
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
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield inTvUserId(action.payload, token);
    console.log(res, '<=======ini hasil user INTV Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User InTv');

      yield put(inTvAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('InTvTransaction');
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

// POST Create Payment Internet Tv
const inTvCreate = (payload, token) => {
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

// POST Create Payment Internet Tv
function* inTvCreateAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionSuccess(true));
    yield put(actionLoading(true));
    const res = yield inTvCreate(action.payload, token);
    console.log(res, '<=======ini hasil CreateBill INTV Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Create Bill InTv');

      yield put(inTvCreatePaymentActionSuccess(res.data));
      yield put(actionSuccess(true));
      let methodPayment = 'Bank Transfer';
      methodPayment === 'Bank Transfer'
        ? yield navigate('ResultPaymentBankInternetTv')
        : methodPayment === 'Payment Card'
        ? yield navigate('ResultPaymentCreditInternetTv')
        : null;
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

// LANDLINE
// POST GET ID LANDLINE
const LandlineUserId = (payload, token) => {
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/landline/bill/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST GET ID LANDLINE
function* LandlineAccountAction(action) {
  const token = yield select(state => state.GlobalReducer.token);
  try {
    yield put(actionLoading(true));
    const res = yield LandlineUserId(action.payload, token);
    console.log(res, '<=======ini hasil user Landline Api');
    if (res.status === 200 && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User Landline');

      yield put(LandlineAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('LandlineTransaction');
    }
    if (res.status === 202) {
      yield put(actionSuccess(false));

      const errorMessage = res.statusText + '';
      ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
    }
    if (res.status === 204) {
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

// POST Create Payment Landline
const LandlineCreate = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  console.log(token, '<=== ini Token');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/landline/bill/bankpayment',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST User_ID Landline
function* LandlineCreatePaymentAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield LandlineCreate(action.payload, token);
    console.log(res, '<=======ini hasil CreateBill Landline Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Create Bill Landline');

      yield put(LandlineCreatePaymentActionSuccess(res.data));
      yield put(actionSuccess(true));
      let methodPayment = 'Bank Transfer';
      methodPayment === 'Bank Transfer'
        ? yield navigate('ResultPaymentBankLandline')
        : methodPayment === 'Payment Card'
        ? yield navigate('ResultPaymentCreditLandline')
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

// MOBILE
// GET OPTIONS MOBILE
const MobileOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/mobile/bill/options',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
// GET OPTIONS MOBILE
function* MobileOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield MobileOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option Mobile Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option Mobile');

      yield put(MobileOptionActionSuccess(res.data));
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

// PDAM
// GET OPTIONS PDAM
const PDAMOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/pdam/bill/region/all',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS PDAM
function* PDAMOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield PDAMOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option PDAM API');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option PDAM');

      yield put(PDAMOptionActionSuccess(res.data));
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

// POST GET User_ID PDAM
const PDAMUserId = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/pdam/bill/customer/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST User_ID PDAM
function* PDAMUserIdAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield PDAMUserId(action.payload, token);
    console.log(res, '<=======ini hasil user PDAM Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User PDAM');

      yield put(PDAMAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('PDAMTransaction');
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

function* newSubOptionSaga() {
  yield takeLatest('GET_BPJS_PERIOD', BpjsPeriodAction);
  yield takeLatest('GET_ACCOUNT_BPJS', BpjsAccountAction);
  yield takeLatest('CREATE_BPJS_PAYMENT', BpjsCreatePaymentAction);
  yield takeLatest('GET_OPTION_ELECTRICITY', ElectricityOptionAction);
  yield takeLatest('GET_TOKEN_ELECTRICITY', ElectricityTokenAction);
  yield takeLatest(
    'GET_TOKEN_ACCOUNT_ELECTRICITY',
    ElectricityTokenAccountAction,
  );
  yield takeLatest(
    'CREATE_TOKEN_ELECTRICITY_PAYMENT',
    ElectricityTokenCreatePayAction,
  );
  yield takeLatest(
    'GET_TAGIHAN_ACCOUNT_ELECTRICITY',
    ElectricityTagihanAccountAction,
  );
  yield takeLatest('GET_OPTION_INTV', inTvOptionAction);
  yield takeLatest('GET_ACCOUNT_INTV', inTvUserIdAction);
  yield takeLatest('CREATE_INTV_PAYMENT', inTvCreateAction);
  yield takeLatest('GET_ACCOUNT_LANDLINE', LandlineAccountAction);
  yield takeLatest('CREATE_LANDLINE_PAYMENT', LandlineCreatePaymentAction);
  yield takeLatest('GET_OPTION_MOBILE', MobileOptionAction);
  yield takeLatest('GET_OPTION_PDAM', PDAMOptionAction);
  yield takeLatest('GET_ACCOUNT_PDAM', PDAMUserIdAction);
}
export default newSubOptionSaga;
