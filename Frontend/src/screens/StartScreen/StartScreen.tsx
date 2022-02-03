import {ImageBackground, Text, View} from 'react-native';

import React from 'react';
import images from '../../res/images';
import styles from './styles';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.frontscreenflag}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
    </View>
  );
};

export default StartScreen;
