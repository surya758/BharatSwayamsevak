import {Pressable, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import styles from './styles';

type Props = {
  onPress: () => void;
  width?: number;
  text: string;
};

const GradientButtonComponent: React.FC<Props> = props => {
  return (
    <Pressable onPress={props.onPress}>
      <LinearGradient
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.7, y: 0.3}}
        locations={[0.4, 0.7, 1]}
        colors={['#2bb11f', '#55a851', '#3b9c32']}
        style={{
          ...styles.linearGradient,
          width: props.width,
        }}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default GradientButtonComponent;
