import React, {createContext, useContext} from 'react';

const GlobalContext = createContext({});

export const GlobalContextProvider = ({
  children,
  isUserLoggedIn,
  setIsUserLoggedIn,
}) => {
  return (
    <GlobalContext.Provider value={{isUserLoggedIn, setIsUserLoggedIn}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

export const useStore = () => useContext(GlobalContext);
