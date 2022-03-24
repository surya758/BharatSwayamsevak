import * as React from 'react';

import {Colors} from '../styles';
import MainScreen from '../screens/Home/MainScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

export type HomeStackParamList = {
  main: undefined;
};
const HomeNav = () => {
  const Drawer = createDrawerNavigator<HomeStackParamList>();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="main"
        component={MainScreen}
        options={{
          title: 'Samatan Samiti',
          headerStyle: {backgroundColor: Colors.BACKGROUND},
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeNav;
