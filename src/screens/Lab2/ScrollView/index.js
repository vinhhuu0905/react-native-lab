import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import Squares from '../../../components/Squares';

const DATA = [1, 2, 3, 5, 6, 4565, 645, 65, 6, 456, 45, 65, 6, 456, 46];

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        {DATA.map((item, index) => (
          <Squares key={index} style={{backgroundColor: 'aqua'}} title={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
