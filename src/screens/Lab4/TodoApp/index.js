import React, {useCallback} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

import Button from '../../../components/Button';
import {useHooks} from './todoApp.hooks';
import styles from './todoApp.styles';

export function TodoAppScreen({navigation}) {
  const {state, dispatch, onChangeTodo} = useHooks();

  const renderBackButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          Keyboard.dismiss();
        }}
        style={styles.buttonBack}>
        <Icons name="arrowleft" color="#000" size={30} />
        <Text style={styles.titleItem}>Back</Text>
      </TouchableOpacity>
    );
  };

  const renderBottom = () => {
    return (
      <View style={styles.containerBottom}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="rgba(0,0,0,.2)"
          placeholder="What do you want to do today ?"
          onChangeText={onChangeTodo}
        />
        <Button title="Add todo" style={styles.button} />
      </View>
    );
  };

  const renderItem = useCallback(({item}) => {
    return (
      <View key={item} style={styles.containerItem}>
        <Icons
          name={item.status ? 'check' : 'closecircle'}
          size={20}
          color="gray"
        />
        <Text style={styles.titleItem}>{item.title}</Text>
      </View>
    );
  }, []);

  const keyExtractor = item => item.key;

  return (
    <KeyboardAvoidingView
      enabled
      style={[styles.container, {paddingTop: StatusBar.currentHeight}]}>
      {renderBackButton()}
      <FlatList
        style={[styles.container]}
        data={state.listTodo}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />

      {renderBottom()}
    </KeyboardAvoidingView>
  );
}
