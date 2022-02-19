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

const windowWidth = Dimensions.get('window').width;

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
              text="REGISTER"
              width={windowWidth * 0.8}
              onPress={onPressRegister}
            />
          </View>
          <Pressable
            style={styles.adminBox}
            onPress={() => navigation.navigate('admin login')}>
            <Text style={styles.adminText}>Admin?</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;
