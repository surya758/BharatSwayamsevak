import AuthNav from './AuthNav';
import HomeNav from './HomeNav';
import React from 'react';
import {useStore} from '../context/GlobalContext';

const MainNav = () => {
  const {isUserLoggedIn} = useStore();

  return isUserLoggedIn ? <HomeNav /> : <AuthNav />;
};

export default MainNav;
