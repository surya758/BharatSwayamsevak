import AddUserScreen from '../screens/Home/AddUserScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/Ionicons';

export type HomeStackParamList = {
  home: undefined;
  addUser: undefined;
};
const Drawer = createDrawerNavigator<HomeStackParamList>();

const HomeNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={() => <CustomDrawer />}
      screenOptions={{
        headerShown: false,
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
      <Drawer.Screen name="addUser" component={AddUserScreen} />
    </Drawer.Navigator>
  );
};

export default HomeNav;
