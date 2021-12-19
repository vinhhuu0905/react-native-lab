import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import colors from '@utils/colors';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/AntDesign';

import Home from '@screens/Home';
import HelloWorld from '@screens/Lab2/HelloWorld';
import CustomComponent from '@screens/Lab2/CustomComponent';
import StateProps from '@screens/Lab2/State_Props';
import Styling from '@screens/Lab2/Styling';
import ScrollView from '@screens/Lab2/ScrollView';

import Contacts from '@screens/Lab3/Contacts';
import Profile from '@screens/Lab3/Profile';
import Favorites from '@screens/Lab3/Favorites';
import Users from '@screens/Lab3/User';
import {TodoAppScreen} from '@screens/Lab4';

import {HomeScreen} from '@screens/Lab6';

const BottomTab = createMaterialBottomTabNavigator();
export const Tab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor={colors.blue}
      inactiveColor="#fff"
      labeled={false}
      barStyle={{
        backgroundColor: colors.black,
      }}>
      <BottomTab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="home" size={26} color={color} />
          ),
        }}
        component={Home}
      />
      <BottomTab.Screen
        name={'Contacts'}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="contacts" size={26} color={color} />
          ),
        }}
        component={Contacts}
      />
      <BottomTab.Screen
        name={'Favorites'}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="star" size={26} color={color} />
          ),
        }}
        component={Favorites}
      />
      <BottomTab.Screen
        name={'Users'}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="user" size={26} color={color} />
          ),
        }}
        component={Users}
      />
    </BottomTab.Navigator>
  );
};

const BookBottomTab = createMaterialBottomTabNavigator();
export const BookTab = () => {
  return (
    <BookBottomTab.Navigator style={{backgroundColor: colors.black}}>
      <BookBottomTab.Screen name="BookHome" component={HomeScreen} />
    </BookBottomTab.Navigator>
  );
};

const Stack = createStackNavigator();
export default () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        initialRouteName={'Tab'}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'HelloWorld'} component={HelloWorld} />
        <Stack.Screen name={'CustomComponent'} component={CustomComponent} />
        <Stack.Screen name={'StateProps'} component={StateProps} />
        <Stack.Screen name={'Styling'} component={Styling} />
        <Stack.Screen name={'ScrollView'} component={ScrollView} />
        <Stack.Screen name={'Profile'} component={Profile} />
        <Stack.Screen name={'TodoAppScreen'} component={TodoAppScreen} />
        <Stack.Screen name={'Tab'} component={Tab} />
        <Stack.Screen name={'BookTab'} component={BookTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
