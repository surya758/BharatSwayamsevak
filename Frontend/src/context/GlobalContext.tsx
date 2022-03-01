import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [isUserLoggedIn, setUsUserLoggedIn] = useState<Boolean>(true);
  return (
    <GlobalContext.Provider value={{isUserLoggedIn, setUsUserLoggedIn}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
