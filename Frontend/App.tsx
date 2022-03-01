import 'react-native-gesture-handler';
import MainNav from './src/navigation/MainNav';
import GlobalProvider from './src/context/GlobalContext';

import React from 'react';
const App = () => {
  return (
    <GlobalProvider>
      <MainNav />
    </GlobalProvider>
  );
};
export default App;
