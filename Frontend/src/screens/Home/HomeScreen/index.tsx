import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {ROUTES, baseURL} from '../../../utils/constants';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import DrawerImageComponent from '../../../components/DrawerImage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {HomeStackParamList} from '../../../navigation/HomeNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import images from '../../../assets/images';
import styles from './styles';
import {useStore} from '../../../context/GlobalContext';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'home'
>;

type userType = {
  name: string;
  designation: string;
  id: string;
  district: string;
};

const HomeScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();
  const isFocused = useIsFocused();
  const {userData} = useStore();
  const {name, role, designation, district} = userData.user;
  const [state, setState] = useState(userData.user.state);
  const [users, setUsers] = useState<Array<userType>>([]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/${ROUTES.users}?state=${state}`,
        );
        if (response.data.results) {
          setUsers(response.data.results);
        }
      } catch (e) {}
    };
    loadUser();
  }, [state, isFocused]);

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
            style={{position: 'absolute', left: 0}}
            onPress={() => navigation.openDrawer()}>
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

export default HomeScreen;
