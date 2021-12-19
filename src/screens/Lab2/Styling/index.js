import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Squares from '../../../components/Squares';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Squares style={{backgroundColor: '#7ce0f9'}} title={'1'} />
      <Squares style={{backgroundColor: '#4dc2c2'}} title={'2'} />
      <Squares style={{backgroundColor: '#ff637c'}} title={'3'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
