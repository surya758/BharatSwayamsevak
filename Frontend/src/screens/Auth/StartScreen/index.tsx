import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native';

import {AuthStackParamList} from '../../../navigation/AuthNav';
import GradientButtonComponent from '../../../components/GradientButton';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NormalButtonComponent from '../../../components/NormalButton';
import React from 'react';
import images from '../../../res/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'start'
>;

const StartScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const onPressLogin = () => {
    navigation.navigate('login');
  };
  const onPressRegister = () => {
    navigation.navigate('register');
  };
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
          <NormalButtonComponent onPress={onPressLogin} />
          <View style={styles.gradient}>
            <GradientButtonComponent
              text="Register"
              onPress={onPressRegister}
            />
          </View>
          <View style={styles.adminContainer}>
            <Text style={styles.beforeAdminText}>Login as </Text>
            <Pressable
              style={styles.adminBox}
              onPress={() => navigation.navigate('adminLogin')}>
              <Text style={styles.adminText}>admin</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;
