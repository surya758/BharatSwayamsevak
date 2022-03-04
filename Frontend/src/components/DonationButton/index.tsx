import {Animated, Pressable, Text} from 'react-native';

import {Colors} from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from './styles';

type Props = {
  value: number;
  onPress: (value: number) => void;
};

const DonationButtonComponent: React.FC<Props> = ({value, onPress}) => {
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
      onPress={() => onPress(value)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View style={[styles.container, animatedScaleStyle]}>
        <Text style={styles.textStyle}>
          <FontAwesome name="rupee" size={20} color={Colors.ALERT} /> {value}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default DonationButtonComponent;
