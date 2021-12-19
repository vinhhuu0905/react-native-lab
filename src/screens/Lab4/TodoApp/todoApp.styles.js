import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 5,
  },
  buttonBack: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 10,
  },
  titleItem: {
    color: '#000',
    fontSize: 17,
    marginLeft: 10,
  },
  containerBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#105652',
  },
  textInput: {
    backgroundColor: '#DED9C4',
    width: '100%',
    borderRadius: 7,
    color: '#000',
    paddingHorizontal: 20,
  },
});
