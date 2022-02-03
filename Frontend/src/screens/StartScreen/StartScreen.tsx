import {ImageBackground, Text, View} from 'react-native';

import NormalButtonComponent from '../../components/NormalButton/NormalButtonComponent';
import React from 'react';
import images from '../../res/images';
import styles from './styles';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.frontscreenflag}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.login}>
          <NormalButtonComponent />
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;
