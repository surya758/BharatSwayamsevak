import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import styles from './styles';

const DonationScreen = () => {
  return (
    <SafeAreaView>
      <AntDesign
        name="back"
        size={30}
        color="#900"
        style={styles.backIconStyle}
      />
      <Text>DonationScreen</Text>
    </SafeAreaView>
  );
};

export default DonationScreen;
