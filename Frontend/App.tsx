import 'react-native-gesture-handler';

import {GlobalProvider} from './src/context/GlobalContext';
import MainNav from './src/navigation/MainNav';
import React from 'react';

const App = () => {
  return (
    <GlobalProvider>
      <MainNav />
    </GlobalProvider>
  );
};
export default App;
