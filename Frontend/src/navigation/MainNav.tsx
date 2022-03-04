import React, {useEffect} from 'react';

import AuthNav from './AuthNav';
import HomeNav from './HomeNav';
import {NavigationContainer} from '@react-navigation/native';
import {useStore} from '../context/GlobalContext';

const MainNav = () => {
  const {isUserLoggedIn} = useStore();

  useEffect(() => {
    console.log(`in mainnav ${isUserLoggedIn}`);
  }, [isUserLoggedIn]);

  return (
    <NavigationContainer>
      {isUserLoggedIn ? <HomeNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default MainNav;
