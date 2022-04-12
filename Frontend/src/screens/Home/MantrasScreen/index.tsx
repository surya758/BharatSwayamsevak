import * as React from 'react';

import {SafeAreaView, View} from 'react-native';

import {HomeDrawerParamList} from '../../../navigation/HomeNav';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Pdf from 'react-native-pdf';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeDrawerParamList,
  'mantras'
>;
const MantraPdf = () => {
  const source = {
    uri: 'https://vedpuran.files.wordpress.com/2012/03/unencrypted-geeta.pdf',
    cache: true,
  };
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const MantrasScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MantraPdf />
    </SafeAreaView>
  );
};

export default MantrasScreen;
