import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import images from '../../res/images';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/HomeNav';
type homeScreenNavigationType = NativeStackNavigationProp<HomeStackParamList>;

const CustomDrawer = () => {
  const navigation = useNavigation<homeScreenNavigationType>();

  return (
    <View style={styles.topContainer}>
      <DrawerContentScrollView
        contentContainerStyle={styles.container}
        bounces={false}>
        <View style={styles.topDrawerView}>
          <Image source={images.guy} style={styles.profileImage} />
          <Text style={styles.nameText}>A sample name</Text>
        </View>
        <View style={styles.drawerView}>
          <DrawerItem
            label="Home"
            onPress={() => navigation.navigate('home')}
            icon={({focused}) => (
              <Icon
                color="#000"
                size={22}
                name={focused ? 'home-outline' : 'home'}
              />
            )}
            labelStyle={styles.drawerItemLabelStyle}
            style={styles.drawerItemViewStyle}
          />
          {/* Remember to replace true with isadmin!!!*/}
          {true ? (
            <DrawerItem
              label="Add User"
              onPress={() => navigation.navigate('addUser')}
              icon={({focused}) => (
                <Icon
                  color="#000"
                  size={22}
                  name={focused ? 'person-add-outline' : 'person-add'}
                />
              )}
              labelStyle={styles.drawerItemLabelStyle}
              style={styles.drawerItemViewStyle}
            />
          ) : null}
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawerItems}>
        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="share-social-outline" size={22} />
          <Text style={styles.drawerText}>Tell a friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <Icon name="log-out-outline" size={22} />
          <Text style={styles.drawerText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
