/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import CountryPicker from 'react-native-country-picker-modal';
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'register'
>;

type Country = {
  callingCode: [string];
  cca2: string;
  currency: [string];
  flag: string;
  name: string;
  region: string;
  subregion: string;
};

const RegisterScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [number, setNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState<Country>({
    callingCode: ['91'],
    cca2: 'IN',
    currency: ['INR'],
    flag: 'flag-in',
    name: 'India',
    region: 'Asia',
    subregion: 'Southern Asia',
  });
  const [withFlag, setWithFlag] = useState<boolean>(true);
  const [withCallingCode, setWithCallingCode] = useState<boolean>(true);
  const [withModal, setWithModal] = useState<boolean>(true);
  const [withCallingCodeButton, setWithCallingCodeButton] =
    useState<boolean>(true);
  const [withEmoji, setWithEmoji] = useState<boolean>(true);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const onSelect = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
  };
  const onPress = () => {
    number === ''
      ? showErrMsg('Please enter the mobile number.')
      : number.length < 10 || !/^[0-9]*$/.test(number)
      ? showErrMsg('Enter a valid mobile number.')
      : navigation.navigate('verification');
  };
  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <View style={styles.lowerContainer}>
          <Icon
            name="back"
            size={30}
            color={Colors.ALERT}
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text style={styles.registerOne}>Register</Text>
            <Text style={styles.registerTwo}>
              Please confirm your country code and enter your phone number
            </Text>
          </View>
          {message ? (
            <View style={styles.errMsgView}>
              <Text style={styles.errMsg}>{message}</Text>
            </View>
          ) : (
            <View style={styles.notErrMsg} />
          )}
          <View style={styles.countryPickerStyle}>
            <CountryPicker
              {...{
                countryCode,
                withFilter,
                withModal,
                withCallingCode,
                withFlag,
                withCallingCodeButton,
                withEmoji,
                onSelect,
              }}
            />
            <TextInput
              style={
                number.trim()
                  ? styles.inputStyleWithout
                  : styles.inputStyleOnChange
              }
              onChangeText={setNumber}
              value={number?.trim()}
              placeholder="enter your mobile number"
              keyboardType="numeric"
              maxLength={10}
              placeholderTextColor="grey"
              autoComplete="off"
              autoCapitalize="none"
              autoFocus={true}
            />
          </View>
          <View style={styles.gradientButton}>
            <GradientButtonComponent text="Continue" onPress={onPress} />
          </View>
          <Text style={styles.endText}>
            We will send a text with a verification code. Message and data rates
            may apply.
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
