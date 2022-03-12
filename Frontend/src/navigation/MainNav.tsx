import React, {useEffect} from 'react';

import {ActivityIndicator} from 'react-native';
import AuthNav from './AuthNav';
import {Colors} from '../styles';
import HomeNav from './HomeNav';
import {useStore} from '../context/GlobalContext';

const MainNav = () => {
  const {state, userData} = useStore();

  useEffect(() => {
    console.log({userData});
  }, [userData]);

  return userData ? (
    userData === 'loading' ? (
      <ActivityIndicator
        size="large"
        color={Colors.PRIMARY}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    ) : (
      <HomeNav />
    )
  ) : (
    <AuthNav />
  );
};

export default MainNav;
