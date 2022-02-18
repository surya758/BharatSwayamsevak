import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import DonationButtonComponent from '../../components/DonationButton/DonationButtonComponent';
import React from 'react';
import styles from './styles';

const DonationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AntDesign
        name="back"
        size={30}
        color="#900"
        style={styles.backIconStyle}
      />
      <View>
        <Text style={styles.donationOne}>Donation</Text>
        <Text style={styles.donationTwo}>Choose a donation amount</Text>
      </View>
      <DonationButtonComponent />
    </SafeAreaView>
  );
};

export default DonationScreen;
