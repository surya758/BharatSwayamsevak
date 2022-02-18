import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import DashedLine from 'react-native-dashed-line';
import DonationButtonComponent from '../../components/DonationButton/DonationButtonComponent';
import React from 'react';
import styles from './styles';

const DonationScreen = () => {
  const onPress = () => {
    console.log('Donation pressed');
  };
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
      <View>
        <View style={styles.donationButtonStyle}>
          <DonationButtonComponent text="101" onPress={onPress} />
          <DonationButtonComponent text="501" onPress={onPress} />
        </View>
        <View style={styles.donationButtonStyle}>
          <DonationButtonComponent text="1001" onPress={onPress} />
          <DonationButtonComponent text="5001" onPress={onPress} />
        </View>
      </View>
      <View style={styles.dashViewStyle}>
        <DashedLine
          dashLength={8}
          dashThickness={2}
          style={styles.dashLineStyle}
        />
        <DashedLine
          dashLength={8}
          dashThickness={2}
          style={styles.dashLineStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default DonationScreen;
