import React, {useEffect, useState} from 'react';

import {ActivityIndicator} from 'react-native';
import AdminLoginScreen from '../screens/Auth/AdminLoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DonationScreen from '../screens/Auth/DonationScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import PasswordScreen from '../screens/Auth/PasswordScreen';
import ReferralScreen from '../screens/Auth/ReferralScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import StartScreen from '../screens/Auth/StartScreen';
import UserDetailScreen from '../screens/Auth/UserDetailScreen';
import VerificationScreen from '../screens/Auth/VerificationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {tempUserData} from '../states/GlobalState';
import {useStore} from '../context/GlobalContext';

export type AuthStackParamList = {
  start: undefined;
  login: undefined;
  register: undefined;
  verification: undefined;
  donation: undefined;
  password: undefined;
  userDetail: undefined;
  adminLogin: undefined;
  referral: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNav = () => {
  const {state, setState, tempUserData} = useStore();

  return state === 'loading' ? (
    <ActivityIndicator
      animating={true}
      color="red"
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    />
  ) : tempUserData.number && tempUserData.otp && tempUserData.password ? (
    <Stack.Navigator
      initialRouteName="referral"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="start" component={StartScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="verification" component={VerificationScreen} />
      <Stack.Screen name="password" component={PasswordScreen} />
      <Stack.Screen name="donation" component={DonationScreen} />
      <Stack.Screen name="userDetail" component={UserDetailScreen} />
      <Stack.Screen name="adminLogin" component={AdminLoginScreen} />
      <Stack.Screen name="referral" component={ReferralScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      initialRouteName="start"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="start" component={StartScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="verification" component={VerificationScreen} />
      <Stack.Screen name="password" component={PasswordScreen} />
      <Stack.Screen name="donation" component={DonationScreen} />
      <Stack.Screen name="userDetail" component={UserDetailScreen} />
      <Stack.Screen name="adminLogin" component={AdminLoginScreen} />
      <Stack.Screen name="referral" component={ReferralScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;
