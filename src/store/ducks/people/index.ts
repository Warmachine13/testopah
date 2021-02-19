import {Reducer} from 'redux';
import {PeopleState, PeopleTypes} from './types';

const INITIAL_STATE: PeopleState = {
  results: undefined,
};

const peopleReducer: Reducer<PeopleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PeopleTypes.LOAD_PEOPLE_REQUEST:
      return {...state, loading: true};
    case PeopleTypes.LOAD_PEOPLE_SUCCCES:
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

export default peopleReducer;
