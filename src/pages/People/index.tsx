import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {People} from 'store/ducks/people/types';
import {styles} from './styles';
import {Props} from './types';
import * as Animatable from 'react-native-animatable';
const IconMod = Animatable.createAnimatableComponent(Icon);

const PeopleScreen = ({route}: Props) => {
  const [people, setPeople] = useState<People>(route.params.people);
  const [fontSize, setFontSize] = useState(20);

  useEffect(() => setPeople(route.params.people), [route.params.people]);

  useEffect(() => {
    setTimeout(() => {
      setFontSize(35);
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <IconMod
        name="empire"
        animation="zoomInUp"
        // ref={icon}
        size={100}
        style={styles.icon}
        color="#1d1b1b"
      />
      <Animatable.Text
        transition="fontSize"
        style={{...styles.title, fontSize}}>
        {people.name}
      </Animatable.Text>
      <Text style={styles.description}>
        Data de nacimento: {people.birth_year}
      </Text>
      <Text style={styles.description}>Cor do olho: {people.eye_color}</Text>
      <Text style={styles.description}>Cor da pele: {people.skin_color}</Text>
      <Text style={styles.description}>Gênero: {people.gender}</Text>
      <Text style={styles.description}>Altura: {people.height} cm</Text>
      <Text style={styles.description}>Peso: {people.mass} kg</Text>
    </View>
  );
};

export default PeopleScreen;
