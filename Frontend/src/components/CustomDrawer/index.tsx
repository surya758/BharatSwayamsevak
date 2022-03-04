import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import images from '../../assets/images';
import styles from './styles';

const CustomDrawer = (props: any) => {
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
        <TouchableOpacity style={styles.signoutTextView}>
          <Icon name="log-out-outline" size={22} />
          <Text style={styles.signoutText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
