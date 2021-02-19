import {People} from 'store/ducks/people/types';

export interface Props {
  route: {params: {people: People}};
}
