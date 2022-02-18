import {Pressable, Text} from 'react-native';

import React from 'react';
import styles from './styles';

const DonationButtonComponent = props => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.text}</Text>
    </Pressable>
  );
};

export default DonationButtonComponent;
