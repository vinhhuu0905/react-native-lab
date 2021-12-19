import React, {useCallback, useLayoutEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ContactThumbnail from '../../../components/ContactThumbnail';
import {fetchContacts} from '../../../api';

export default ({navigation}) => {
  const [state, setState] = useState({
    contacts: [],
    loading: false,
    error: false,
  });

  const renderItem = useCallback(
    ({item, index}) => (
      <ContactThumbnail
        name={item.name}
        phone={item.phone}
        avatar={item.avatar}
      />
    ),
    [],
  );
  const keyExtractor = useCallback(({phone}) => phone, []);

  useLayoutEffect(() => {
    fetchContacts()
      .then(contacts =>
        setState(oldState => ({
          ...oldState,
          contacts,
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

  const favorites = state.contacts.filter(contact => contact.favorite);
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={styles.list}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  list: {
    alignItems: 'center',
  },
});
