import {Pressable, Text} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from './styles';

const DonationButtonComponent = props => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => props.onPress(props.value)}>
      <Text style={styles.textStyle}>
        <FontAwesome name="rupee" size={20} color="#900" /> {props.value}
      </Text>
    </Pressable>
  );
};

export default DonationButtonComponent;
