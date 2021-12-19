import React from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

export default ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>#Lab 2</Text>
        <Text
          onPress={() => navigation.navigate('HelloWorld')}
          style={styles.item}>
          1 + 2. Hello world, Capture Tap
        </Text>
        <Text
          onPress={() => navigation.navigate('CustomComponent')}
          style={styles.item}>
          3. Custom button
        </Text>
        <Text
          onPress={() => navigation.navigate('StateProps')}
          style={styles.item}>
          3. Custom State, props
        </Text>
        <Text
          onPress={() => navigation.navigate('Styling')}
          style={styles.item}>
          4. Styling
        </Text>
        <Text
          onPress={() => navigation.navigate('ScrollView')}
          style={styles.item}>
          5. ScrollView
        </Text>
      </View>

      <View style={styles.containerTitle}>
        <Text style={styles.title}>#Lab 3</Text>
        <Text
          onPress={() => navigation.navigate('Contacts')}
          style={styles.item}>
          1. Contacts List + Bottom Navigation + Drawer
        </Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>#Lab 4</Text>
        <Text
          onPress={() => navigation.navigate('TodoAppScreen')}
          style={styles.item}>
          1. FireStores
        </Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>#Lab 6</Text>
        <Text
          onPress={() => navigation.navigate('BookTab')}
          style={styles.item}>
          1. Book app
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerTitle: {
    marginHorizontal: 10,
    marginTop: StatusBar.currentHeight + 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'powderblue',
    color: '#fff',
    borderRadius: 90,
    marginTop: 10,
    padding: 10,
  },
});
