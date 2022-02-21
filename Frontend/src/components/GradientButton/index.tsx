import {Pressable, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import styles from './styles';

type Props = {
  onPress: () => void;
  width?: number;
  bottomRightRadius?: number;
  text: string;
};

const GradientButtonComponent: React.FC<Props> = props => {
  return (
    <Pressable onPress={props.onPress}>
      <LinearGradient
        start={{x: 0.0, y: 0.4}}
        end={{x: 0.8, y: 1.0}}
        locations={[0.3, 0.7, 1]}
        colors={['#196911', '#4fa74a', '#3ea035']}
        style={{
          ...styles.linearGradient,
          width: props.width,
          borderBottomRightRadius: props.bottomRightRadius,
        }}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default GradientButtonComponent;
