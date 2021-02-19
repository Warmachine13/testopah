import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';

import {FilmState} from './ducks/films/types';
import {PeopleState} from './ducks/people/types';

import rootSaga from './ducks/rootSaga';
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  films: FilmState;
  people: PeopleState;
}

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  if (__DEV__) {
    const logger = require('redux-logger');
    middlewares.push(logger.default);
  }
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
