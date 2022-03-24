import {Colors, Typography} from '../styles';

import AddUserScreen from '../screens/Core/AddUserScreen(unusuable)';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomDrawer from '../components/CustomDrawer';
import DashBoardScreen from '../screens/Core/DashBoardScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useStore} from '../context/GlobalContext';

export type CoreStackParamList = {
  dashBoard: undefined;
  addUser: undefined;
};
const Drawer = createDrawerNavigator<CoreStackParamList>();
const HomeNav = () => {
  const {userData} = useStore();
  const isAdmin = () => {
    if (userData.user.role === 'admin') {
      return true;
    }
    return false;
  };
  return (
    <Drawer.Navigator
      initialRouteName="dashBoard"
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
        name="dashBoard"
        component={DashBoardScreen}
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
      {isAdmin() ? (
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
