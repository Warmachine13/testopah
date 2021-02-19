import {all, takeLatest} from 'redux-saga/effects';

// Films
import {FilmTypes} from './films/types';
import {loadFilms} from './films/sagas';

import {PeopleTypes} from './people/types';
import {loadPeopleList} from './people/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(FilmTypes.LOAD_FILMS_REQUEST, loadFilms),
    takeLatest(PeopleTypes.LOAD_PEOPLE_LIST_REQUEST, loadPeopleList),
  ]);
}
