import * as React from 'react';

import {Colors, Typography} from '../styles';
import {Text, View} from 'react-native';

import AboutUsScreen from '../screens/Home/AboutUsScreen';
import GeetaScreen from '../screens/Home/GeetaScreen';
import MainScreen from '../screens/Home/MainScreen';
import MantrasScreen from '../screens/Home/MantrasScreen';
import MissionScreen from '../screens/Home/MissionScreen';
import RamayanaScreen from '../screens/Home/RamayanaScreen';
import VisionScreen from '../screens/Home/VisionScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

export type HomeStackParamList = {
  main: undefined;
  aboutUs: undefined;
  mission: undefined;
  vision: undefined;
  geeta: undefined;
  ramayana: undefined;
  mantras: undefined;
};

const HomeNav = () => {
  const Drawer = createDrawerNavigator<HomeStackParamList>();

  const Header = () => {
    return (
      <View>
        {/*logo of samatan samiti*/}
        <Text
          style={{fontSize: 16, fontFamily: Typography.FONT_FAMILY_SEMIBOLD}}>
          Akhand Samatan Samiti
        </Text>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.BACKGROUND},
      }}>
      <Drawer.Screen
        name="main"
        component={MainScreen}
        options={{
          title: 'Home',
          headerTitle: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="aboutUs"
        component={AboutUsScreen}
        options={{
          title: 'About Us',
        }}
      />
      <Drawer.Screen
        name="mission"
        component={MissionScreen}
        options={{
          title: 'Our Mission',
        }}
      />
      <Drawer.Screen
        name="vision"
        component={VisionScreen}
        options={{
          title: 'Our Vision',
        }}
      />
      <Drawer.Screen
        name="geeta"
        component={GeetaScreen}
        options={{
          title: 'Geeta',
        }}
      />
      <Drawer.Screen
        name="ramayana"
        component={RamayanaScreen}
        options={{
          title: 'Ramayana',
        }}
      />
      <Drawer.Screen
        name="mantras"
        component={MantrasScreen}
        options={{
          title: 'Mantras',
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeNav;
