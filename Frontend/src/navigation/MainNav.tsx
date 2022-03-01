import AuthNav from './AuthNav';
import HomeNav from './HomeNav';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';

const MainNav = () => {
  const {isUserLoggedIn} = useContext(GlobalContext);
  return (
    <NavigationContainer>
      {isUserLoggedIn ? <HomeNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;
