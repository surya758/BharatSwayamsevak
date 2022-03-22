import React, {useEffect} from 'react';

import {ActivityIndicator} from 'react-native';
import AdminLoginScreen from '../screens/Auth/AdminLoginScreen';
import DonationScreen from '../screens/Auth/DonationScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import PasswordScreen from '../screens/Auth/PasswordScreen';
import ReferralScreen from '../screens/Auth/ReferralScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import StartScreen from '../screens/Auth/StartScreen';
import UserDetailScreen from '../screens/Auth/UserDetailScreen';
import VerificationScreen from '../screens/Auth/VerificationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useStore} from '../context/GlobalContext';

export type AuthStackParamList = {
  start: undefined;
  login: undefined;
  register: undefined;
  verification: {phoneNumber: string};
  donation: undefined;
  password: undefined;
  userDetail: undefined;
  adminLogin: undefined;
  referral: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNav = () => {
  const {tempUserData} = useStore();

  const moveToReferralScreen = () => {
    if (
      tempUserData?.number &&
      tempUserData?.otp &&
      tempUserData?.password &&
      tempUserData?.isVerified
    ) {
      return true;
    }
  };

  const moveToDonationScreen = () => {
    if (
      tempUserData?.number &&
      tempUserData?.otp &&
      tempUserData?.password &&
      tempUserData?.isVerified &&
      tempUserData?.name &&
      tempUserData?.designation
    ) {
      return true;
    }
  };

  // useEffect(() => {
  //   moveToReferralScreen();
  //   moveToDonationScreen();
  // }, [tempUserData]);

  // useEffect(() => {
  //   const isRegisterProcessComplete = () => {
  //     if (
  //       tempUserData?.number &&
  //       tempUserData?.otp &&
  //       tempUserData?.password &&
  //       tempUserData?.isVerified &&
  //       tempUserData?.name &&
  //       tempUserData?.designation &&
  //       tempUserData?.donation
  //     ) {
  //       setIsUserLoggedIn(true);
  //     }
  //   };
  //   isRegisterProcessComplete();
  // }, [tempUserData]);

  const screenSet = (routeName: string) => {
    return (
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
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

  return tempUserData ? (
    tempUserData === 'loading' ? (
      <ActivityIndicator
        animating={true}
        color="red"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    ) : moveToDonationScreen() ? (
      screenSet('donation')
    ) : moveToReferralScreen() ? (
      screenSet('referral')
    ) : (
      screenSet('start')
    )
  ) : (
    screenSet('start')
  );
};

export default AuthNav;
