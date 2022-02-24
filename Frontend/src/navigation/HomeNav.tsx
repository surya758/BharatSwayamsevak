import AddUserScreen from '../screens/Home/AddUserScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../res/colors';

export type HomeStackParamList = {
  home: undefined;
  addUser: undefined;
};
const Drawer = createDrawerNavigator<HomeStackParamList>();

const HomeNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        drawerActiveBackgroundColor: colors.saffron,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
      }}>
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home-outline" size={22} color={color} />
          ),
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="addUser"
        component={AddUserScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="person-add-outline" size={22} color={color} />
          ),
          drawerLabel: 'Add User',
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeNav;
