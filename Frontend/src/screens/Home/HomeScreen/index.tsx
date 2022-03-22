/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {DATA, STATES} from '../../../utils/constants';
import {ROUTES, baseURL} from '../../../utils/constants';
import React, {useState} from 'react';

import {Colors} from '../../../styles';
import DrawerImageComponent from '../../../components/DrawerImage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {HomeStackParamList} from '../../../navigation/HomeNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MemberComponent from '../../../components/Member';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PickerModalComponent from '../../../components/PickerModal';
import images from '../../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../../../context/GlobalContext';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();

  const [isVisible, setIsVisible] = useState(false);
  const {userData} = useStore();
  const {name, role, designation} = userData.user;
  const [state, setState] = useState(userData.user.state);
  const onClose = () => {
    setIsVisible(false);
  };

  const isAdmin = () => {
    if (userData.user.role === 'admin') {
      return true;
    }
    return false;
  };

  const onSelect = (selectedState: string) => {
    console.log(selectedState);
    setState(selectedState);
    setIsVisible(false);
  };
  const title = 'state';

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
          {isAdmin() ? (
            <Pressable
              style={
                false
                  ? {...styles.addButton, backgroundColor: 'red'}
                  : styles.addButton
              }
              onPress={() => navigation.navigate('addUser')}>
              <FontAwesome5 name="plus" size={24} color="#fff" />
            </Pressable>
          ) : null}
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
              <Text style={styles.idCardTextAnswerStyle}>DESIGNATION</Text>
              <Text style={styles.idCardTextHeadingStyle} numberOfLines={1}>
                {designation}
              </Text>
            </View>
          </View>
          <Image style={styles.userIDPhotoStyle} source={images.guy} />
        </View>
        <View style={styles.selectorView}>
          <View style={styles.memberView}>
            <Ionicons name="people" size={30} color="#000" />
            <Text style={styles.memberTextStyle}>Members</Text>
          </View>
          <PickerModalComponent
            visible={isVisible}
            items={STATES}
            title={title}
            onClose={onClose}
            onSelect={onSelect}
            state2={state}
          />
          <Pressable onPress={() => setIsVisible(true)} style={styles.modal}>
            <Text style={styles.modalText} numberOfLines={1}>
              {state}
            </Text>
            <FontAwesome5 name="angle-down" size={30} color={Colors.BLACK} />
          </Pressable>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <MemberComponent
                name={item.name}
                image={images.guy}
                designation={item.designation}
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
