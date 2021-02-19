import React, {useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/Fontisto';
import {useSelector, useDispatch} from 'react-redux';
import {loadFilmsRequest} from 'store/ducks/films/actions';
import {ApplicationState} from 'store/index';
import {styles} from './styles';
import {ListItemInterface, Props} from './types';

const ListItem = React.memo(
  ({
    title,
    release_date,
    characters,
    director,
    producer,
    onPress,
  }: ListItemInterface) => (
    <TouchableOpacity
      onPress={() => onPress(characters)}
      style={styles.buttonContainer}>
      <View style={styles.subContainer}>
        <Icon
          name="film"
          size={30}
          style={{margin: 7, alignSelf: 'center'}}
          color="#000"
        />
        <View>
          <Text style={styles.buttonTitle}>{title}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.buttonDescription}>
              {producer}, {director}
            </Text>
          </View>
          <Text style={styles.buttonDescription}>
            {dayjs(release_date).format('DD/MM/YYYY')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ),
);

const Home = ({navigation}: Props) => {
  const {results} = useSelector(({films}: ApplicationState) => ({
    results: films?.results || [],
    count: films?.count || 0,
    next: films?.next,
    previous: films?.previous,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilmsRequest());
  }, [dispatch]);

  const moveToList = (peoples: string[]) => {
    navigation.push('PeopleList', {
      peoples,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={results}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({item}) => <ListItem onPress={moveToList} {...item} />}
        keyExtractor={({episode_id}) => `${episode_id}`}
      />
    </View>
  );
};

export default Home;
