import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ButtonDefault from '../../../components/Button';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ButtonDefault
        style={styles.buttonHello}
        onPress={() => alert('Hellooooooo')}
        title={'Say Hello'}
      />
      <ButtonDefault
        style={styles.buttonGoodbye}
        onPress={() => alert('Gooobye')}
        title={'Say Goodbye'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonHello: {
    backgroundColor: 'tomato',
  },
  buttonGoodbye: {
    backgroundColor: '#4dc2c2',
  },
});
