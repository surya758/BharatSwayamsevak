import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import DashedLine from 'react-native-dashed-line';
import DonationButtonComponent from '../../../components/DonationButton';
import GradientButtonComponent from '../../../components/GradientButton';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'donation'
>;

const DonationScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [donationAmount, onDonationAmount] = useState<string>('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;
  const windowWidth = Dimensions.get('window').width;
  const [message, setMessage] = useState<string>('');
  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };
  const onPressDonate = () => {
    donationAmount === ''
      ? showErrMsg('Please enter a donation amount!')
      : parseInt(donationAmount, 10) < 10
      ? showErrMsg('Please enter a amount greater than 10')
      : !/^[0-9]*$/.test(donationAmount)
      ? showErrMsg('No special characters or alphabets!')
      : console.log(donationAmount);
  };
  const onPress = (donation: number) => {
    console.log(donation);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.lowerContainer}>
            <AntDesign
              name="back"
              size={30}
              color="#900"
              style={styles.backIconStyle}
              onPress={() => navigation.goBack()}
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
            {message ? (
              <View style={styles.errMsgView}>
                <Text style={styles.errMsg}>{message}</Text>
              </View>
            ) : (
              <View style={styles.notErrMsg} />
            )}
            <TextInput
              style={donationAmount ? styles.inputWith : styles.inputWithout}
              onChangeText={onDonationAmount}
              value={donationAmount}
              placeholder="enter a custom donation amount"
              keyboardType="numeric"
              placeholderTextColor="grey"
              autoComplete="off"
              autoCapitalize="none"
            />
            <View style={styles.gradientDonationButtonView}>
              <GradientButtonComponent
                text="Donate"
                onPress={onPressDonate}
                width={windowWidth - 60}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default DonationScreen;
