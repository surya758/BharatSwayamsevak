import * as React from 'react';

import {Pressable, SafeAreaView, Text, View} from 'react-native';

import {HomeStackParamList} from '../../../navigation/HomeNav';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'main'
>;

const MainScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.startScreenReturnView}>
        <Text style={styles.leftOfClickHere}>Want to register or login? </Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.clickHere}>Click here</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;