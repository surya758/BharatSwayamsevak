import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContextProvider} from '../context/GlobalContext';
import MainNav from '../navigation/MainNav';

export type tempUserData = {
  name?: string;
  number?: string;
  otp?: string;
  password?: string;
  isVerified?: boolean;
  referrer?: string;
  designation?: string;
  donation?: number;
  state?: string;
  district?: string;
};

const GlobalState = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [userData, setUserData] = useState<Object | null | 'loading'>(
    'loading',
  );
  const [tempUserData, setTempUserData] = useState<
    tempUserData | 'loading' | null
  >('loading');

  const getUserDataFromLocalStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userData');

      if (jsonValue) {
        setUserData(JSON.parse(jsonValue));
      } else {
        setUserData(null);
      }
    } catch (e) {
      setUserData(null);
    }
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, [state]);

  useEffect(() => {
    const tempDataLoader = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@tempUserData');
        jsonValue
          ? setTempUserData(JSON.parse(jsonValue))
          : setTempUserData(null);
      } catch (e) {
        setTempUserData(null);
      }
    };
    tempDataLoader();
  }, []);

  return (
    <GlobalContextProvider
      state={state}
      setState={setState}
      district={district}
      setDistrict={setDistrict}
      tempUserData={tempUserData}
      userData={userData}>
      <MainNav />
    </GlobalContextProvider>
  );
};

export default GlobalState;
