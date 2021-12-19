import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.square}>
        <Text style={{color: '#fff'}}>Hello Worlds</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Hellooooo!')}>
        <Text>Button 1</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight + 10,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    width: 200,
    height: 60,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
