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
        <View style={styles.greetingViewStyle}>
          <Text style={styles.greetingTextLeft}>
            Hola, <Text style={styles.greetingTextRight}>User</Text>
          </Text>
        </View>
        <View style={styles.userIDCardStyle}>
          <View>
            <Text style={styles.idCardHeadingStyle}>Maddy Gibson</Text>
            <View style={styles.idCardTextViewStyle}>
              <Text style={styles.idCardTextAnswerStyle}>STATE</Text>
              <Text style={styles.idCardTextHeadingStyle}>Uttar Pradesh</Text>
            </View>
            <View>
              <Text style={styles.idCardTextAnswerStyle}>POSITION</Text>
              <Text style={styles.idCardTextHeadingStyle}>Volunteer</Text>
            </View>
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
