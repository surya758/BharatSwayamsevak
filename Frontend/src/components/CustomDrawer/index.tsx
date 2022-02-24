import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import images from '../../res/images';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.topContainer}>
      <DrawerContentScrollView contentContainerStyle={styles.container}>
        <View style={styles.topDrawerView}>
          <Image source={images.guy} style={styles.profileImage} />
          <Text style={styles.nameText}>A sample name</Text>
        </View>
        <View style={styles.drawerView}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopColor: '#000',
          borderTopWidth: 1,
        }}>
        <TouchableOpacity
          style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="share-social-outline" size={22} />
          <Text style={{fontFamily: 'Roboto-Medium', fontSize: 16, padding: 5}}>
            Tell a friend
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="log-out-outline" size={22} />
          <Text style={{fontFamily: 'Roboto-Medium', fontSize: 16, padding: 5}}>
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
