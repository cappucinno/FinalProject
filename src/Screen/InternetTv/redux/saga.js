import axios from 'axios';
import {takeLatest, put, select} from 'redux-saga/effects';
import {inTvOptionActionSuccess, inTvOptionActionFailed} from './action';
import {actionLoading} from '../../../Store/GlobalAction';

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
    console.log(err.response.data.message, 'Gagal Mengambil data');
    yield put(actionLoading(false));
    yield put(inTvOptionActionFailed());
  }
}

function* inTvOptionSaga() {
  yield takeLatest('GET_OPTION_INTV', inTvOptionAction);
}
export default inTvOptionSaga;
