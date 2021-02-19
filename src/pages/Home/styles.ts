import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {fontSize: 25, textAlign: 'center'},
  list: {flex: 1},
  buttonContainer: {
    width: '100%',
    padding: 15,
    margin: 2,
  },
  itemSeparator: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'gray',
    height: 0.3,
  },
  buttonTitle: {color: '#000', fontSize: 18},
  buttonDescription: {color: '#000', fontSize: 13},
  subContainer: {flexDirection: 'row'},
});
