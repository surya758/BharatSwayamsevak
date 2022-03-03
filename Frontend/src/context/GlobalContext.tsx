import React, {FC, createContext, useState} from 'react';

export const GlobalContext = createContext({});

const GlobalProvider: FC = ({children}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<Boolean>(false);
  return (
    <GlobalContext.Provider value={{isUserLoggedIn, setIsUserLoggedIn}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
