import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import films from './films';
import people from './people';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
};

const filmsConfig = {
  key: 'films',
  storage,
  blacklist: ['loading', 'error'],
};

const peopleConfig = {
  key: 'people',
  storage,
  blacklist: ['loading', 'error'],
};

const appReducer = combineReducers({
  films: persistReducer(filmsConfig, films),
  people: persistReducer(peopleConfig, people),
});

export default persistReducer(persistConfig, appReducer);
