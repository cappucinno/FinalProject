import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {navigate} from '../../../Function/Nav';
import {takeLatest, put, select} from 'redux-saga/effects';
import {
  ProfileOptionActionSuccess,
  ProfileAccountActionSuccess,
  ProfileCreatePaymentActionSuccess,
} from './action';
import {
  actionLoading,
  actionIsLogged,
  actionSuccess,
} from '../../../Store/GlobalAction';

// GET OPTIONS
const ProfileOptions = (payload, token) => {
  return axios({
    method: 'GET',
    url: 'https://biller-app-api.herokuapp.com/api/biller/user/info',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// GET OPTIONS
function* ProfileOptionAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield ProfileOptions(action.payload, token);
    console.log(action.payload, '<=======ini hasil Option Profile Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data Option InTv');

      yield put(ProfileOptionActionSuccess(res.data));
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

// POST Foto Profile
const ProfileFoto = (payload, token) => {
  console.log(payload, '<==== ini data payload dari input userid');
  return axios({
    method: 'POST',
    url: 'https://biller-app-api.herokuapp.com/api/biller/user/upload-profile',
    data: payload,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};

// POST Foto Profile
function* ProfileFotoAction(action) {
  const token = yield select(state => state.GlobalReducer.token);

  try {
    yield put(actionLoading(true));
    const res = yield ProfileFoto(action.payload, token);
    console.log(res, '<=======ini hasil user Api');
    if (res && res.data) {
      console.log(res.data, 'ini hasil res');
      console.log('Berhasil Mengambil data User');

      yield put(ProfileAccountActionSuccess(res.data));
      yield put(actionSuccess(true));

      yield navigate('Profile');
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
// const ProfileCreate = (payload, token) => {
//   console.log(payload, '<==== ini data payload dari input userid');
//   return axios({
//     method: 'POST',
//     url: 'https://biller-app-api.herokuapp.com/api/biller/internet_TV/bill',
//     data: payload,
//     headers: {
//       Authorization: 'Bearer ' + token,
//     },
//   });
// };

// // POST User_ID Internet Tv
// function* inTvCreateAction(action) {
//   const token = yield select(state => state.GlobalReducer.token);

//   try {
//     yield put(actionLoading(true));
//     const res = yield inTvCreate(action.payload, token);
//     console.log(res, '<=======ini hasil CreateBill INTV Api');
//     if (res && res.data) {
//       console.log(res.data, 'ini hasil res');
//       console.log('Berhasil Create Bill InTv');

//       yield put(inTvCreatePaymentActionSuccess(res.data));
//       yield put(actionSuccess(true));
//       let methodPayment = 'Bank Transfer';
//       methodPayment === 'Bank Transfer'
//         ? yield navigate('ResultPaymentBankInternetTv')
//         : methodPayment === 'Payment Card'
//         ? yield navigate('ResultPaymentCreditInternetTv')
//         : null;
//     } else if (res.status === 204) {
//       yield put(actionSuccess(false));
//       yield put(actionIsLogged(false));

//       const errorMessage = res.statusText + '';
//       ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
//     }
//   } catch (err) {
//     if (err.response === 401) {
//       yield put(actionIsLogged(false));
//       const errorMessage = err.response.data.message + '';
//       ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
//     } else {
//       console.log(err.response, 'Gagal Mengambil data');
//       const errorMessage = err.response.data.message + '';
//       ToastAndroid.show(errorMessage, ToastAndroid.LONG, ToastAndroid.TOP);
//     }
//   } finally {
//     yield put(actionLoading(false));
//   }
// }

function* ProfileOptionSaga() {
  yield takeLatest('GET_OPTION_PROFILE', ProfileOptionAction);
  yield takeLatest('GET_ACCOUNT_PROFILE', ProfileFotoAction);
  //   yield takeLatest('CREATE_INTV_PAYMENT', inTvCreateAction);
}
export default ProfileOptionSaga;
