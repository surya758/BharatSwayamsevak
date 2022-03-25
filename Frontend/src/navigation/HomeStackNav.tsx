import * as React from 'react';

import DistrictScreen from '../screens/Home/MainStack/DistrictScreen';
import MainScreen from '../screens/Home/MainStack/MainScreen';
import StateScreen from '../screens/Home/MainStack/StateScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  main: undefined;
  state: undefined;
  district: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="main">
      <Stack.Screen name="main" component={MainScreen} />
      <Stack.Screen name="state" component={StateScreen} />
      <Stack.Screen name="district" component={DistrictScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNav;
