import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePlayer from 'pages/Home';
import PeoplePlayer from 'pages/People';
import PeopleList from 'pages/PeopleList';

const Base = createStackNavigator();

const Routes = () => (
  <Base.Navigator
    screenOptions={{
      cardStyle: {backgroundColor: '#0e171f'},
      headerStyle: {backgroundColor: '#2e416c'},
      headerTintColor: 'white',
    }}
    initialRouteName="HomePlayer">
    <Base.Screen
      name="HomePlayer"
      options={{title: 'Filmes'}}
      component={HomePlayer}
    />
    <Base.Screen
      name="PeopleList"
      options={{title: 'Lista de Personagens'}}
      component={PeopleList}
    />
    <Base.Screen
      name="PeoplePlayer"
      options={{title: 'Personagem'}}
      component={PeoplePlayer}
    />
  </Base.Navigator>
);

export default Routes;
