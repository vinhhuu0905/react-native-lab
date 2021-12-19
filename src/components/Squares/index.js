import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({title = '', style = null}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
});
