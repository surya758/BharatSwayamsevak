/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const [state, setState] = useState(false);
  const [userData, setUserData] = useState<Object | null | 'loading'>(
    'loading',
  );
  const [tempUserData, setTempUserData] = useState<
    tempUserData | 'loading' | null
  >('loading');

  useEffect(() => {
    const tempDataLoader = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@tempUserData');
        console.log(jsonValue);
        jsonValue
          ? setTempUserData(JSON.parse(jsonValue))
          : setTempUserData(null);
      } catch (e) {
        setTempUserData(null);
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
