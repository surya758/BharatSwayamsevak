import 'react-native-gesture-handler';

import GlobalState from './src/states/GlobalState';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <GlobalState />
    </NavigationContainer>
  );
};
export default App;
