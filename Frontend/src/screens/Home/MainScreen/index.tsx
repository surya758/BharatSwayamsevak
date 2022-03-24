import * as React from 'react';

import {Pressable, SafeAreaView, Text, View} from 'react-native';

import {HomeStackParamList} from '../../../navigation/HomeNav';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'main'
>;

const MainScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={styles.startReturnView}>
        <Text style={styles.leftOfClickHere}>Want to register or login? </Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.clickHere}>Click here</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
