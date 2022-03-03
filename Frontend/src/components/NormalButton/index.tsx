import {Animated, Pressable, Text} from 'react-native';

import React from 'react';
import styles from './styles';

type Props = {
  onPress: () => void;
};

const NormalButtonComponent: React.FC<Props> = ({onPress}) => {
  const animatedButtonScale = new Animated.Value(1);

  // When button is pressed in, animate the scale to 1.5
  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 0.85,
      useNativeDriver: true,
    }).start();
  };

  // When button is pressed out, animate the scale back to 1
  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // The animated style for scaling the button within the Animated.View
  const animatedScaleStyle = {
    transform: [{scale: animatedButtonScale}],
  };
  return (
    <Pressable
      onPress={() => onPress()}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View style={[styles.container, animatedScaleStyle]}>
        <Text style={styles.textStyle}>Login</Text>
      </Animated.View>
    </Pressable>
  );
};

export default NormalButtonComponent;
