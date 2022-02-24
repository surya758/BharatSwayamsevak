import {Pressable, Text} from 'react-native';

import React from 'react';
import styles from './styles';

type Props = {
  onPress: () => void;
};

const NormalButtonComponent: React.FC<Props> = ({onPress}) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress()}>
      <Text style={styles.textStyle}>Login</Text>
    </Pressable>
  );
};

export default NormalButtonComponent;
