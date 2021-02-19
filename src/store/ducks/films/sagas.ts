import {call, put} from 'redux-saga/effects';
import api from 'services/api';
import {loadFilmsFailure, loadFilmsSuccess} from './actions';

export function* loadFilms() {
  try {
    const {data} = yield call(api.get, '/films');
    yield put(loadFilmsSuccess(data));
  } catch {
    yield put(loadFilmsFailure());
  }
}
