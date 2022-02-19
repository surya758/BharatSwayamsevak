import AuthNav from './AuthNav';
import HomeNav from './HomeNav';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const isUserLoggedin = false;

const MainNav = () => {
  // return isUserLoggedin ? <HomeNav /> : <AuthNav />;
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
};

export default MainNav;
