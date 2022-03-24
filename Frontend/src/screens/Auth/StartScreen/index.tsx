import * as React from 'react';

import {Image, ImageBackground, Pressable, Text, View} from 'react-native';

import {AuthStackParamList} from '../../../navigation/AuthNav';
import Feather from 'react-native-vector-icons/Feather';
import GradientButtonComponent from '../../../components/GradientButton';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NormalButtonComponent from '../../../components/NormalButton';
import images from '../../../assets/images';
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
          <Pressable
            onPress={() => navigation.navigate('home')}
            style={styles.moreView}>
            <Text style={styles.moreText}>More</Text>
            <Feather name="arrow-right" size={22} color="white" />
          </Pressable>
          <NormalButtonComponent onPress={onPressLogin} />
          <View style={styles.gradient}>
            <GradientButtonComponent
              text="Register"
              isLoading={false}
              isActive={true}
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
