import 'react-native-gesture-handler';

import React, {useCallback} from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import createStore from 'store/index';
import {enableScreens} from 'react-native-screens';

enableScreens();

export const {store, persistor} = createStore();

const App = () => {
  const Routes = useCallback(() => {
    const Route = require('./routes/index').default;
    return <Route />;
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0e171f"
        translucent
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{flex: 1, backgroundColor: '#0e171f'}}>
            <Routes />
          </View>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
