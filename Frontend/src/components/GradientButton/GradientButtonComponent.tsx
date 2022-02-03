import {Pressable, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import styles from './styles';

const GradientButtonComponent = () => {
  return (
    <Pressable onPress={() => console.log('Register')}>
      <LinearGradient
        start={{x: 0.0, y: 0.4}}
        end={{x: 0.8, y: 1.0}}
        locations={[0.3, 0.7, 1]}
        colors={['#138808', '#57C34F', '#2FC121']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>RESGISTER</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default GradientButtonComponent;
