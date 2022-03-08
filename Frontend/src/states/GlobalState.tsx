import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContextProvider} from '../context/GlobalContext';
import MainNav from '../navigation/MainNav';

export type tempUserData = {
  number?: string;
  otp?: string;
  password?: string;
  isVerified?: boolean;
  referrer?: string;
  designation?: string;
  donation?: number;
};

const GlobalState = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [state, setState] = useState<string>('loading');
  const [userData, setUserData] = useState<Object | null | 'loading'>(
    'loading',
  );
  const [tempUserData, setTempUserData] = useState<tempUserData>();

  useEffect(() => {
    const tempDataLoader = async () => {
      if (!tempUserData) {
        try {
          const jsonValue = await AsyncStorage.getItem('@tempUserData');
          jsonValue
            ? setTempUserData(JSON.parse(jsonValue))
            : setTempUserData({});
          setState('refresh');
        } catch (e) {
          // error reading value
        }
      }
    };

    tempDataLoader();
  }, [state]);

  return (
    <GlobalContextProvider
      isAdmin={isAdmin}
      state={state}
      setState={setState}
      tempUserData={tempUserData}
      isUserLoggedIn={isUserLoggedIn}
      setIsUserLoggedIn={setIsUserLoggedIn}
      userData={userData}>
      <MainNav />
    </GlobalContextProvider>
  );
};

export default GlobalState;
