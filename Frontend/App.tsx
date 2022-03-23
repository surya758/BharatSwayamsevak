import 'react-native-gesture-handler';

import GlobalState from './src/states/GlobalState';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StateScreen from './src/screens/Auth/StateScreen';
import Toast from 'react-native-toast-message';
import UserDetailScreen from './src/screens/Auth/UserDetailScreen';

const App = () => {
  return (
    <NavigationContainer>
      <GlobalState />
      {/* <UserDetailScreen /> */}
      {/* <StateScreen /> */}
      <Toast />
    </NavigationContainer>
  );
};
export default App;
