import React, {useState} from 'react';

import {GlobalContextProvider} from '../context/GlobalContext';
import MainNav from '../navigation/MainNav';

const GlobalState = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<Boolean>(true);
  const [isAdmin, setIsAdmin] = useState<Boolean>(true);
  return (
    <GlobalContextProvider
      isAdmin={isAdmin}
      isUserLoggedIn={isUserLoggedIn}
      setIsUserLoggedIn={setIsUserLoggedIn}>
      <MainNav />
    </GlobalContextProvider>
  );
};

export default GlobalState;
