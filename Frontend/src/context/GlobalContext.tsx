import * as React from 'react';

import type {tempUserData} from '../states/GlobalState';

interface gloablContentProvider {
  children: React.ReactNode;
  userData: Object | null | 'loading';
  tempUserData: tempUserData | 'loading' | null;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  district: string;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = React.createContext({});

export const GlobalContextProvider: React.FC<gloablContentProvider> = ({
  children,
  userData,
  state,
  setState,
  tempUserData,
  district,
  setDistrict,
}) => {
  return (
    <GlobalContext.Provider
      value={{
        state,
        userData,
        setState,
        tempUserData,
        district,
        setDistrict,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

export const useStore = () => React.useContext(GlobalContext);
