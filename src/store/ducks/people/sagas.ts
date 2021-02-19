import {put} from 'redux-saga/effects';
import api from 'services/api';
import {PayloadAction} from 'typesafe-actions';

import {loadPeopleSuccess, loadPeopleFailure} from './actions';

interface Payload {
  list: string[];
}

export function* loadPeopleList({
  payload: {list},
}: PayloadAction<string, Payload>) {
  try {
    let calld = Promise.all(
      list.map(async (v: string) => await (await api.get(v)).data),
    );
    const response = yield calld;
    yield put(loadPeopleSuccess({results: response}));
  } catch {
    yield put(loadPeopleFailure());
  }
}
