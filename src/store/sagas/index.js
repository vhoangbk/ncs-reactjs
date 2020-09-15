import { put, call, takeLatest, all } from 'redux-saga/effects';
import {get, URL_LIST ,URL_DATA} from '../../services'
import {
  FETCH_LIST_SAGA,
  FETCH_DATA_SAGA,
  fetchListSagaSuccessAction,
  fetchListSagaFailAction,
  fetchDataSagaSuccessAction
} from '../actions';

export function* fetchList() {
  try{
    const res = yield call(get, URL_LIST);
    yield put(fetchListSagaSuccessAction(res.data['case-studies']));
  }catch (e) {
    yield put(fetchListSagaFailAction(e));

  }
}

export function* fetchData() {
  try{
    const res = yield call(get, URL_DATA);
    yield put(fetchDataSagaSuccessAction(res.data));
  }catch (e) {
    yield put(fetchListSagaFailAction(e));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest([FETCH_LIST_SAGA], fetchList),
    takeLatest([FETCH_DATA_SAGA], fetchData),
  ]);
}
