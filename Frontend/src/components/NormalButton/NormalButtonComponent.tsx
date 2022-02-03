import {Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

const NormalButtonComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>LOG IN</Text>
    </View>
  );
};

export default NormalButtonComponent;
