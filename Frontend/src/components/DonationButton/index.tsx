import {Pressable, Text} from 'react-native';

import {Colors} from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from './styles';

type Props = {
  value: number;
  onPress: (value: number) => void;
};

const DonationButtonComponent: React.FC<Props> = ({value, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress(value)}>
      <Text style={styles.textStyle}>
        <FontAwesome name="rupee" size={20} color={Colors.ALERT} /> {value}
      </Text>
    </Pressable>
  );
};

export default DonationButtonComponent;
