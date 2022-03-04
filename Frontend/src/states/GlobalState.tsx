import React, {useState} from 'react';

import {GlobalContextProvider} from '../context/GlobalContext';
import MainNav from '../navigation/MainNav';

const GlobalState = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<Boolean>(true);
  return (
    <GlobalContextProvider
      isUserLoggedIn={isUserLoggedIn}
      setIsUserLoggedIn={setIsUserLoggedIn}>
      <MainNav />
    </GlobalContextProvider>
  );
};

export default GlobalState;
