import React, {useEffect} from 'react';

import {ActivityIndicator} from 'react-native';
import AuthNav from './AuthNav';
import {Colors} from '../styles';
import CoreNav from './CoreNav';
import {useStore} from '../context/GlobalContext';

const MainNav = () => {
  const {userData} = useStore();

  return userData ? (
    userData === 'loading' ? (
      <ActivityIndicator
        size="large"
        color={Colors.PRIMARY}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    ) : (
      <CoreNav />
    )
  ) : (
    <AuthNav />
  );
};

export default MainNav;
