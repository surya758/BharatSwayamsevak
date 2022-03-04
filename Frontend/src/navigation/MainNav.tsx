import AuthNav from './AuthNav';
import HomeNav from './HomeNav';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useStore} from '../context/GlobalContext';

const MainNav = () => {
  const {isUserLoggedIn} = useStore();
  return (
    <NavigationContainer>
      {isUserLoggedIn ? <HomeNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;
