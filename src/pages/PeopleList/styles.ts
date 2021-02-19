import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonTitle: {color: '#000', fontSize: 18},
  buttonDescription: {color: '#000', fontSize: 13},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
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
  list: {flex: 1},
  listTitle: {color: 'black', fontSize: 15},
  icon: {margin: 7, marginRight: 15, alignSelf: 'center'},
  subContainer: {flexDirection: 'row'},
});
