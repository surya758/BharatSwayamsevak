import React, {FC, useContext} from 'react';

const GlobalContext = React.createContext({});

export const GlobalContextProvider: FC = ({
  children,
  isAdmin,
  state,
  setState,
  isUserLoggedIn,
  setIsUserLoggedIn,
}) => {
  return (
    <GlobalContext.Provider
      value={{isAdmin, state, setState, isUserLoggedIn, setIsUserLoggedIn}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

export const useStore = () => useContext(GlobalContext);
