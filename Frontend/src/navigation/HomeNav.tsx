import * as React from 'react';

import {Colors, Typography} from '../styles';

import AboutUsScreen from '../screens/Home/AboutUsScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GeetaScreen from '../screens/Home/GeetaScreen';
import HomeStackNav from './HomeStackNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MantrasScreen from '../screens/Home/MantrasScreen';
import MissionScreen from '../screens/Home/MissionScreen';
import RamayanaScreen from '../screens/Home/RamayanaScreen';
import VisionScreen from '../screens/Home/VisionScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

export type HomeDrawerParamList = {
  homeStack: undefined;
  aboutUs: undefined;
  mission: undefined;
  vision: undefined;
  geeta: undefined;
  ramayana: undefined;
  mantras: undefined;
};

const HomeNav = () => {
  const Drawer = createDrawerNavigator<HomeDrawerParamList>();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.BACKGROUND},
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
        },
        drawerLabelStyle: {
          fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
          marginLeft: -25,
          fontSize: 15,
        },
        drawerActiveBackgroundColor: Colors.PRIMARY,
        drawerActiveTintColor: Colors.WHITE,
        drawerInactiveTintColor: Colors.BLACK,
      }}>
      <Drawer.Screen
        name="homeStack"
        component={HomeStackNav}
        options={{
          title: 'Akhand Samatan Samiti',
          drawerIcon: ({color}) => (
            <Ionicons name="md-home-sharp" size={22} color={color} />
          ),
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="aboutUs"
        component={AboutUsScreen}
        options={{
          title: 'About Us',
          drawerIcon: ({color}) => (
            <FontAwesome5 name="info-circle" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="mission"
        component={MissionScreen}
        options={{
          title: 'Our Mission',
          drawerIcon: ({color}) => (
            <FontAwesome5 name="fist-raised" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="vision"
        component={VisionScreen}
        options={{
          title: 'Our Vision',
          drawerIcon: ({color}) => (
            <FontAwesome5 name="eye" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="geeta"
        component={GeetaScreen}
        options={{
          title: 'Geeta',
          drawerIcon: ({color}) => (
            <Ionicons name="book" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ramayana"
        component={RamayanaScreen}
        options={{
          title: 'Ramayana',
          drawerIcon: ({color}) => (
            <Ionicons name="book" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="mantras"
        component={MantrasScreen}
        options={{
          title: 'Mantras',
          drawerIcon: ({color}) => (
            <Ionicons name="book" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeNav;
