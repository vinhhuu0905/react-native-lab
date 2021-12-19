import React, {useCallback, useLayoutEffect, useState} from 'react';
import {View, StyleSheet, FlatList, StatusBar} from 'react-native';
import ContactListItem from '../../../components/ContactListItem';
import {fetchContacts} from '../../../api';

export default ({navigation}) => {
  const [state, setState] = useState({
    contacts: [],
    loading: false,
    error: false,
  });
  const contactsSorted = state.contacts.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const renderItem = useCallback(
    ({item, index}) => (
      <ContactListItem
        key={index.toString()}
        name={item.name}
        avatar={item.avatar}
        phone={item.phone}
        onPress={() => navigation.navigate('Profile')}
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
          contacts: contacts,
          loading: false,
          error: false,
        })),
      )
      .catch(e =>
        setState(oldState => ({...oldState, loading: false, error: true})),
      );
    return () => {};
  }, []);

  return (
    <View style={[styles.container]}>
      <FlatList
        style={styles.list}
        data={contactsSorted}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
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
    marginTop: StatusBar.currentHeight,
  },
});
