import {Colors, Typography} from '../styles';

import AddUserScreen from '../screens/Home/AddUserScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomDrawer from '../components/CustomDrawer';
import HomeScreen from '../screens/Home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useStore} from '../context/GlobalContext';

export type HomeStackParamList = {
  home: undefined;
  addUser: undefined;
};
const Drawer = createDrawerNavigator<HomeStackParamList>();
const HomeNav = () => {
  const {isAdmin} = useStore();
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
          fontSize: 15,
        },
        drawerActiveBackgroundColor: Colors.PRIMARY,
        drawerActiveTintColor: Colors.WHITE,
        drawerInactiveTintColor: Colors.BLACK,
      }}>
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color, focused}) => (
            <AntDesign
              name={focused ? 'appstore1' : 'appstore-o'}
              size={22}
              color={color}
            />
          ),
          drawerLabel: 'Dashboard',
        }}
      />
      {isAdmin ? (
        <Drawer.Screen
          name="addUser"
          component={AddUserScreen}
          options={{
            drawerIcon: ({color, focused}) => (
              <Ionicons
                name={focused ? 'person-add' : 'person-add-outline'}
                size={22}
                color={color}
              />
            ),
            drawerLabel: 'Add User',
          }}
        />
      ) : null}
    </Drawer.Navigator>
  );
};

export default HomeNav;
