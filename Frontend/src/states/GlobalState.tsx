import React, {useState} from 'react';

import {GlobalContextProvider} from '../context/GlobalContext';
import MainNav from '../navigation/MainNav';

export type tempUserData = {
  phoneNumber?: string;
  otp?: string;
  isVerified?: boolean;
  referrer?: string;
  designation?: string;
  donation?: number;
};

const GlobalState = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [state, setState] = useState(true);
  const [userData, setUserData] = useState<Object | null | 'loading'>(
    'loading',
  );
  return (
    <GlobalContextProvider
      isAdmin={isAdmin}
      state={state}
      setState={setState}
      isUserLoggedIn={isUserLoggedIn}
      setIsUserLoggedIn={setIsUserLoggedIn}
      userData={userData}>
      <MainNav />
    </GlobalContextProvider>
  );
};

export default GlobalState;
