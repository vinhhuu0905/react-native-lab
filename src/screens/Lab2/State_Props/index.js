import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.count}>You've pressed button</Text>
        <Text style={[styles.count, {color: 'tomato', fontSize: 50}]}>
          {count}
        </Text>
        <Text style={styles.count}>times</Text>
      </View>
      <Text style={styles.buttonClick} onPress={() => setCount(count + 1)}>
        Click me
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonClick: {
    color: '#000',
    fontSize: 20,
    marginBottom: 20,
  },
});
