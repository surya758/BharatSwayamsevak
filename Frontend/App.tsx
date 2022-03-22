import 'react-native-gesture-handler';

import GlobalState from './src/states/GlobalState';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <GlobalState />
      <Toast />
    </NavigationContainer>
  );
};
export default App;
