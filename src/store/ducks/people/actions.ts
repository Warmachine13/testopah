import {action} from 'typesafe-actions';
import {PeopleTypes} from './types';

export const loadPeopleRequest = (id: number) =>
  action(PeopleTypes.LOAD_PEOPLE_REQUEST, {id});

export const loadPeopleListRequest = (list: string[]) =>
  action(PeopleTypes.LOAD_PEOPLE_LIST_REQUEST, {list});

export const loadPeopleSuccess = (data: Record<string, unknown>) =>
  action(PeopleTypes.LOAD_PEOPLE_SUCCCES, {data});

export const loadPeopleFailure = () => action(PeopleTypes.LOAD_PEOPLE_FAILURE);
