import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';

import DashedLine from 'react-native-dashed-line';
import DrawerImageComponent from '../../../components/DrawerImage/DrawerImageComponent';
import React from 'react';
import images from '../../../res/images';
import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={styles.lowerContainer}>
        <View style={styles.photoRingImageView}>
          <ImageBackground
            style={styles.photoRingImageStyle}
            source={images.photoRing}>
            <Image style={styles.userImageStyle} source={images.guy} />
          </ImageBackground>
          <DrawerImageComponent />
        </View>
        <View style={{alignItems: 'center', margin: 16}}>
          <Text style={{fontFamily: 'ABeeZee-Italic', fontSize: 16}}>
            Hola,{' '}
            <Text style={{fontFamily: 'Comfortaa-Regular', fontSize: 20}}>
              User
            </Text>
          </Text>
        </View>
        <View style={styles.userIDCardStyle}>
          <View
            style={{
              borderColor: 'red',
              borderWidth: 1,
            }}>
            <Text style={{fontSize: 24, fontFamily: 'Abel-Regular'}}>
              Maddy Gibson
            </Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
          </View>
          <Image style={styles.userIDPhotoStyle} source={images.guy} />
        </View>
        <DashedLine
          dashLength={7.2}
          dashThickness={1.6}
          style={styles.dashLineStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
