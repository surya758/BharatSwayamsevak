import React, {useState} from 'react';

import {GlobalContextProvider} from '../context/GlobalContext';
import MainNav from '../navigation/MainNav';

const GlobalState = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<Boolean>(false);
  const [isAdmin, setIsAdmin] = useState<Boolean>(true);
  const [state, setState] = useState<boolean>(true);
  console.log(`visited globalstate. isuserloggedin is ${isUserLoggedIn}`);
  return (
    <GlobalContextProvider
      isAdmin={isAdmin}
      state={state}
      setState={setState}
      isUserLoggedIn={isUserLoggedIn}
      setIsUserLoggedIn={setIsUserLoggedIn}>
      <MainNav />
    </GlobalContextProvider>
  );
};

export default GlobalState;
