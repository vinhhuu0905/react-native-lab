import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default ({onPress = null, title = '', style = null}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
});
