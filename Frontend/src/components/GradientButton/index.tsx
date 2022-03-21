import * as React from 'react';

import {ActivityIndicator, Animated, Pressable, Text} from 'react-native';

import {Colors} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

type Props = {
  onPress: () => void;
  text: string;
  isActive: boolean;
  isLoading: boolean;
};

const GradientButtonComponent: React.FC<Props> = props => {
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
      disabled={!props.isActive ? true : false}
      onPress={props.onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View style={[styles.animated, animatedScaleStyle]}>
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.7, y: 0.3}}
          locations={[0.4, 0.7, 1]}
          colors={
            props.isActive
              ? ['#2bb11f', '#55a851', '#3b9c32']
              : ['#808080', '#808080', '#808080']
          }
          style={styles.container}>
          {!props.isLoading ? (
            <Text style={styles.buttonText}>{props.text}</Text>
          ) : (
            <ActivityIndicator animating={true} color={Colors.ALERT} />
          )}
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
};

export default GradientButtonComponent;
