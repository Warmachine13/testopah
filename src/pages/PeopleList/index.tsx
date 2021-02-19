import React, {useEffect} from 'react';
import {styles} from './styles';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {loadPeopleListRequest} from 'store/ducks/people/actions';
import {People} from 'store/ducks/people/types';
import {ApplicationState} from 'store/index';
import {ListItemInterface, Props} from './types';

const ListItem = React.memo(
  ({
    name,
    gender,
    mass,
    birth_year,
    url,
    height,
    onPress,
    ...rest
  }: ListItemInterface) => (
    <TouchableOpacity
      onPress={() =>
        onPress({name, gender, mass, birth_year, url, height, ...rest})
      }
      style={styles.buttonContainer}>
      <View style={styles.subContainer}>
        <Icon name="person" size={30} style={styles.icon} color="#000" />
        <View>
          <Text style={styles.buttonTitle}>{name}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.buttonDescription}>
              {height} cm, {mass} KG
            </Text>
          </View>
          <Text style={styles.buttonDescription}>{birth_year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  ),
);

const PeopleList = ({route, navigation}: Props) => {
  const {results} = useSelector(({people}: ApplicationState) => ({
    results: people?.results || [],
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPeopleListRequest(route.params.peoples));
  }, [dispatch, route.params.peoples]);

  const moveToList = (people: People) => {
    navigation.push('PeoplePlayer', {
      people,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={results}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({item}) => <ListItem onPress={moveToList} {...item} />}
        keyExtractor={({name}) => name}
      />
    </View>
  );
};

export default PeopleList;
