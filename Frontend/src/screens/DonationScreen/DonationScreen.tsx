/* eslint-disable @typescript-eslint/no-shadow */
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import DashedLine from 'react-native-dashed-line';
import DonationButtonComponent from '../../components/DonationButton/DonationButtonComponent';
import GradientButtonComponent from '../../components/GradientButton/GradientButtonComponent';
import styles from './styles';

const DonationScreen = () => {
  const [donationAmount, onDonationAmount] = useState(null);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  const windowWidth = Dimensions.get('window').width;
  const onPressDonate = () => {
    console.log(donationAmount);
  };
  const onPress = (donation: number) => {
    console.log(donation);
  };
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}>
      <SafeAreaView>
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
            <DonationButtonComponent value={101} onPress={onPress} />
            <DonationButtonComponent value={501} onPress={onPress} />
          </View>
          <View style={styles.donationButtonStyle}>
            <DonationButtonComponent value={1001} onPress={onPress} />
            <DonationButtonComponent value={5001} onPress={onPress} />
          </View>
        </View>
        <View style={styles.dashViewStyle}>
          <DashedLine
            dashLength={7.2}
            dashThickness={1.6}
            style={styles.dashLineStyle}
          />
          <Text>OR</Text>
          <DashedLine
            dashLength={7.2}
            dashThickness={1.6}
            style={styles.dashLineStyle}
          />
        </View>
        <TextInput
          style={donationAmount ? styles.inputWith : styles.inputWithout}
          onChangeText={onDonationAmount}
          value={donationAmount}
          placeholder="enter a custom donation amount"
          keyboardType="numeric"
        />
        <View style={styles.gradientDonationButtonView}>
          <GradientButtonComponent
            text="DONATE"
            bottomRightRadius={0}
            onPress={onPressDonate}
            width={windowWidth - 60}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default DonationScreen;
