import * as React from 'react';

import AuthNav from './AuthNav';
import HomeNav from './HomeNav';
import {useStore} from '../context/GlobalContext';

const MainNav = () => {
  const {userData} = useStore();

  return userData ? <HomeNav /> : <AuthNav />;
};

export default MainNav;
