import AuthNav from './AuthNav';
import HomeNav from './HomeNav';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const isUserLoggedin = true;

const MainNav = () => {
  return (
    <NavigationContainer>
      {isUserLoggedin ? <HomeNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;
