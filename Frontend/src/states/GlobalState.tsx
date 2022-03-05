import React, {useState} from 'react';

import {GlobalContextProvider} from '../context/GlobalContext';
import MainNav from '../navigation/MainNav';

const GlobalState = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<Boolean>(false);
  const [isAdmin, setIsAdmin] = useState<Boolean>(true);
  console.log(`visited globalstate. isuserloggedin is ${isUserLoggedIn}`);
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
