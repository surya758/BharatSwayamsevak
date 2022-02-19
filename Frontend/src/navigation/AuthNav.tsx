import DonationScreen from '../screens/Auth/DonationScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import PasswordScreen from '../screens/Auth/PasswordScreen';
import React from 'react';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import StartScreen from '../screens/Auth/StartScreen';
import UserDetailScreen from '../screens/Auth/UserDetailScreen';
import VerificationScreen from '../screens/Auth/VerificationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  start: undefined;
  login: undefined;
  register: undefined;
  verification: undefined;
  donation: undefined;
  password: undefined;
  'user detail': undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="start"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="start" component={StartScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="verification" component={VerificationScreen} />
      <Stack.Screen name="donation" component={DonationScreen} />
      <Stack.Screen name="password" component={PasswordScreen} />
      <Stack.Screen name="user detail" component={UserDetailScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;
