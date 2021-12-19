import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {fetchRandomContact} from '../../../api';
import colors from '../../../utils/colors';
import ContactThumbnail from '../../../components/ContactThumbnail';
import DetailListItem from '../../../components/DetailListItem';

export default ({navigation}) => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    fetchRandomContact()
      .then(contact => setContact(contact))
      .catch(err => console.log('Some Err', err));
  }, []);

  const {avatar, name, email, phone, cell} = contact;
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        animated
        backgroundColor="transparent"
      />
      <View style={styles.containerHead}>
        <Icon
          onPress={() => navigation.goBack()}
          name="left"
          size={30}
          style={{marginTop: StatusBar.currentHeight + 20, marginLeft: 20}}
        />
        <View style={styles.avartaSection}>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email} />
        <DetailListItem icon="phone" title="Work" subtitle={phone} />
        <DetailListItem icon="phone" title="Personal" subtitle={cell} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHead: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  avartaSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsSection: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
