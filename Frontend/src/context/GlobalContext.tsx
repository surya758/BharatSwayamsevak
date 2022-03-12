import * as React from 'react';

import type {tempUserData} from '../states/GlobalState';

interface gloablContentProvider {
  children: React.ReactNode;
  isAdmin: boolean;
  userData: Object | null | 'loading';
  tempUserData: tempUserData | 'loading' | null;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = React.createContext({});

export const GlobalContextProvider: React.FC<gloablContentProvider> = ({
  children,
  isAdmin,
  userData,
  state,
  setState,
  tempUserData,
}) => {
  return (
    <GlobalContext.Provider
      value={{
        isAdmin,
        state,
        userData,
        setState,
        tempUserData,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

export const useStore = () => React.useContext(GlobalContext);
