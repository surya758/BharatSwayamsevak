import {
  Alert,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import DashedLine from 'react-native-dashed-line';
import DonationButtonComponent from '../../../components/DonationButton';
import GradientButtonComponent from '../../../components/GradientButton';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../../../context/GlobalContext';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'donation'
>;

const DonationScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [donationAmount, onDonationAmount] = useState<string>('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;
  const [message, setMessage] = useState<string>('');
  const {setIsUserLoggedIn} = useStore();
  useState<boolean>(false);
  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };
  const onPressDonate = () => {
    donationAmount === ''
      ? showErrMsg('Please enter a donation amount.')
      : parseInt(donationAmount, 10) < 10
      ? showErrMsg('Please enter a amount greater than 10.')
      : !/^[0-9]*$/.test(donationAmount)
      ? showErrMsg('No special characters or alphabets.')
      : console.log(donationAmount);
  };
  const onPress = (donation: number) => {
    return setIsUserLoggedIn(true);
    // console.log(donation);
  };

  const createTwoButtonAlert = () => {
    Alert.alert(
      'Are you sure?',
      'You will exit this sign-up process and all your information will be deleted.',
      [
        {
          text: 'NO',
          onPress: () => null,
          style: 'destructive',
        },
        {text: 'YES', onPress: () => backPressed()},
      ],
    );
  };

  const backPressed = async () => {
    // delete value from async for tempUserData
    try {
      await AsyncStorage.removeItem('@tempUserData');
      navigation.navigate('start');
    } catch (e) {
      // error reading value
    }
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
              color={Colors.ALERT}
              style={styles.backIconStyle}
              onPress={createTwoButtonAlert}
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
              style={
                donationAmount.trim() ? styles.inputWith : styles.inputWithout
              }
              onChangeText={onDonationAmount}
              value={donationAmount.trim()}
              placeholder="enter a custom donation amount"
              keyboardType="numeric"
              placeholderTextColor="grey"
              autoComplete="off"
              autoCapitalize="none"
            />
            <View style={styles.gradientDonationButtonView}>
              <GradientButtonComponent text="Donate" onPress={onPressDonate} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default DonationScreen;
