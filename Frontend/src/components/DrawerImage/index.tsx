import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const DrawerImageComponent = () => {
  return (
    <View style={styles.drawerViewStyle}>
      <Entypo name="menu" size={30} color="#fff" />
    </View>
  );
};

export default DrawerImageComponent;
