import * as React from 'react';

import {Pressable, SafeAreaView, Text, View} from 'react-native';

import {HomeDrawerParamList} from '../../../navigation/HomeNav';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeDrawerParamList,
  'geeta'
>;

const GeetaScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.startScreenReturnView}></View>
    </SafeAreaView>
  );
};

export default GeetaScreen;
