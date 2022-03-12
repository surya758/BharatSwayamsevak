import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ROUTES, baseURL} from '../../utils/constants';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import axios from 'axios';
import images from '../../assets/images';
import styles from './styles';
import {useStore} from '../../context/GlobalContext';

const CustomDrawer = (props: any) => {
  const {setState, userData} = useStore();

  const cleanData = async () => {
    try {
      await AsyncStorage.removeItem('@userData').then(() =>
        setState('Refreshing'),
      );
    } catch (exception) {}
  };

  const signOutFunc = async () => {
    try {
      await axios
        .post(`${baseURL}/${ROUTES.auth}/logout`, {
          refreshToken: `${userData.tokens.refresh.token}`,
        })
        .then(() => {
          cleanData();
        });
    } catch (error) {
      console.error(error);
    }
  };

  const showSignOutAlert = async () => {
    return Alert.alert('Sign out?', 'You can always log back in', [
      {text: 'Cancel'},
      {text: 'Sign out', onPress: () => signOutFunc()},
    ]);
  };

  return (
    <View style={styles.topContainer}>
      <DrawerContentScrollView
        contentContainerStyle={styles.container}
        {...props}>
        <View style={styles.topDrawerView}>
          <Image source={images.guy} style={styles.profileImage} />
          <Text style={styles.nameText}>A sample name</Text>
        </View>
        <View style={styles.drawerView}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.lowerContainer}>
        <TouchableOpacity style={styles.shareTextView}>
          <Icon name="share-social-outline" size={22} />
          <Text style={styles.shareText}>Tell a friend</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signoutTextView}
          onPress={showSignOutAlert}>
          <Icon name="log-out-outline" size={22} />
          <Text style={styles.signoutText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
