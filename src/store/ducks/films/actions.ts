import {action} from 'typesafe-actions';
import {FilmTypes} from './types';

export const loadFilmsRequest = () => action(FilmTypes.LOAD_FILMS_REQUEST);

export const loadFilmsSuccess = (data: Record<string, unknown>) =>
  action(FilmTypes.LOAD_FILMS_SUCCCES, {data});

export const loadFilmsFailure = () => action(FilmTypes.LOAD_FILMS_FAILURE);
