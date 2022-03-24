import * as React from 'react';

import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import {CoreStackParamList} from '../../../navigation/CoreNav';
import DrawerImageComponent from '../../../components/DrawerImage';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import images from '../../../assets/images';
import styles from './styles';
import {useStore} from '../../../context/GlobalContext';

type coreScreenNavigationType = NativeStackNavigationProp<
  CoreStackParamList,
  'dashBoard'
>;
const DashBoardScreen = () => {
  const navigation = useNavigation<coreScreenNavigationType>();
  const {userData}: any = useStore();
  const {name, role, district} = userData.user;

  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={styles.lowerContainer}>
        <View style={styles.photoRingImageView}>
          <ImageBackground
            style={styles.photoRingImageStyle}
            source={images.photoRing}>
            <Image style={styles.userImageStyle} source={images.guy} />
          </ImageBackground>
          <Pressable
            style={styles.burgerView}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <DrawerImageComponent />
          </Pressable>
        </View>
        <View style={styles.greetingViewStyle}>
          <Text style={styles.greetingTextLeft}>
            Hola,{' '}
            <Text style={styles.greetingTextRight}>
              {role === 'admin' ? 'Admin' : 'User'}
            </Text>
          </Text>
        </View>
        <View style={styles.userIDCardStyle}>
          <View>
            <Text style={styles.idCardHeadingStyle}>{name}</Text>
            <View style={styles.idCardTextViewStyle}>
              <Text style={styles.idCardTextAnswerStyle}>STATE</Text>
              <Text style={styles.idCardTextHeadingStyle}>
                {userData.user.state}
              </Text>
            </View>
            <View>
              <Text style={styles.idCardTextAnswerStyle}>DISTRICT</Text>
              <Text style={styles.idCardTextHeadingStyle} numberOfLines={1}>
                {district}
              </Text>
            </View>
          </View>
          <Image style={styles.userIDPhotoStyle} source={images.guy} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashBoardScreen;
