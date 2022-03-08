import React, {FC, useContext} from 'react';

const GlobalContext = React.createContext({});

export const GlobalContextProvider: FC = ({
  children,
  isAdmin,
  userData,
  state,
  setState,
  isUserLoggedIn,
  tempUserData,
  setIsUserLoggedIn,
}) => {
  return (
    <GlobalContext.Provider
      value={{
        isAdmin,
        state,
        userData,
        setState,
        tempUserData,
        isUserLoggedIn,
        setIsUserLoggedIn,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

export const useStore = () => useContext(GlobalContext);
