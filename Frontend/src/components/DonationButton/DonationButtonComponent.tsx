import {Pressable, Text} from 'react-native';

import React from 'react';
import styles from './styles';

const DonationButtonComponent = props => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => props.onPress(props.value)}>
      <Text style={styles.textStyle}>{props.value}</Text>
    </Pressable>
  );
};

export default DonationButtonComponent;
