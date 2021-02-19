import {Film} from 'store/ducks/films/types';

export interface ListItemInterface extends Film {
  onPress: (peoples: string[]) => void;
}

export interface Props {
  navigation: {push: (screen: string, {}) => void};
}
