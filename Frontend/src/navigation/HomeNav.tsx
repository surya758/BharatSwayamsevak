import AddUserScreen from '../screens/Home/AddUserScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  home: undefined;
  'add user': undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="add user" component={AddUserScreen} />
    </Stack.Navigator>
  );
};

export default HomeNav;