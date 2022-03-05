import React, {useEffect} from 'react';

import AuthNav from './AuthNav';
import HomeNav from './HomeNav';
import {useStore} from '../context/GlobalContext';

const MainNav = () => {
  const {isUserLoggedIn} = useStore();

  // useEffect(() => {
  console.log(`visited mainnav. isuserloggedin is ${isUserLoggedIn}`);
  // }, [isUserLoggedIn]);

  return isUserLoggedIn ? <HomeNav /> : <AuthNav />;
};

export default MainNav;
