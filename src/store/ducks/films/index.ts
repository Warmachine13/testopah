import {Reducer} from 'redux';
import {FilmState, FilmTypes} from './types';

const INITIAL_STATE: FilmState = {
  count: undefined,
  next: undefined,
  previous: undefined,
  results: [],
};

const filmReducer: Reducer<FilmState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilmTypes.LOAD_FILMS_REQUEST:
      return {...state, loading: true};
    case FilmTypes.LOAD_FILMS_FAILURE:
      return {...state, loading: false};
    case FilmTypes.LOAD_FILMS_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        ...action.payload.data,
      };

    default:
      return state;
  }
};

export default filmReducer;
