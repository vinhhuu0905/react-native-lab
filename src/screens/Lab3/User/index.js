import React, {useLayoutEffect, useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import ContactThumbnail from '../../../components/ContactThumbnail';
import Icon from 'react-native-vector-icons/AntDesign';

import {fetchUserContact} from '../../../api';
import colors from '../../../utils/colors';

export default ({navigation}) => {
  const [state, setState] = useState({
    user: [],
    loading: false,
    error: false,
  });
  useLayoutEffect(() => {
    fetchUserContact()
      .then(user =>
        setState(oldState => ({
          ...oldState,
          user,
          loading: false,
          error: false,
        })),
      )
      .catch(err => {
        console.log(
          'Log App ~ file: index.js ~ line 36 ~ useLayoutEffect ~ err',
          err,
        );
        setState(oldState => ({...oldState, loading: false, error: true}));
      });
  }, []);

  const {avatar, name, phone} = state.user;
  return (
    <View style={styles.container}>
      <StatusBar
        animated
        barStyle={'light-content'}
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.avatarContainer}>
        <ContactThumbnail
          textColor="#fff"
          avatar={avatar}
          name={name}
          phone={phone}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
