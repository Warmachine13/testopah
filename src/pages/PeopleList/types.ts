import {People} from 'store/ducks/people/types';

export interface ListItemInterface extends People {
  onPress: (people: People) => void;
}

export interface Props {
  route: {params: {peoples: string[]}};
  navigation: {push: (screen: string, {}) => void};
}
