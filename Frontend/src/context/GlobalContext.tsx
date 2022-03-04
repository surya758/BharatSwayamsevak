import React, {FC, useContext} from 'react';

const GlobalContext = React.createContext({});

export const GlobalContextProvider: FC = ({
  children,
  isAdmin,
  isUserLoggedIn,
  setIsUserLoggedIn,
}) => {
  return (
    <GlobalContext.Provider
      value={{isAdmin, isUserLoggedIn, setIsUserLoggedIn}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

export const useStore = () => useContext(GlobalContext);
