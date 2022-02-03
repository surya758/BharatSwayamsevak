import {Image, ImageBackground, Pressable, Text, View} from 'react-native';

import GradientButtonComponent from '../../components/GradientButton/GradientButtonComponent';
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
        <View style={styles.upperBox}>
          <Image style={styles.tinyLogo} source={images.logo} />
        </View>
        <View style={styles.bottomBox}>
          <NormalButtonComponent />
          <View style={styles.gradient}>
            <GradientButtonComponent />
          </View>
          <Pressable
            style={styles.adminBox}
            onPress={() => console.log('admin!!!')}>
            <Text style={styles.adminText}>Admin?</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;
