import * as React from 'react';

import type {tempUserData} from '../states/GlobalState';

interface gloablContentProvider {
  children: React.ReactNode;
  isAdmin: boolean;
  userData: Object | null | 'loading';
  tempUserData: tempUserData | 'loading' | null;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface lContentProvider {
  isAdmin: boolean;
  userData: Object | null | 'loading';
  tempUserData: tempUserData | 'loading' | null;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = React.createContext({});

export const GlobalContextProvider: React.FC<gloablContentProvider> = ({
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

export const useStore = () => React.useContext(GlobalContext);
