import React, {FC, createContext, useContext, useState} from 'react';

const GlobalContext = createContext({});

export const GlobalProvider: FC = ({children}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<Boolean>(false);
  return (
    <GlobalContext.Provider value={{isUserLoggedIn, setIsUserLoggedIn}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

export const useStore = () => useContext(GlobalContext);
