import {Pressable, Text} from 'react-native';

import React from 'react';
import styles from './styles';

const NormalButtonComponent = () => {
  return (
    <Pressable style={styles.container} onPress={() => console.log('log in')}>
      <Text style={styles.textStyle}>LOG IN</Text>
    </Pressable>
  );
};

export default NormalButtonComponent;
