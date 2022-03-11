/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ROUTES, baseURL} from '../../../utils/constants';
import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
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
  callingCode: string;
  cca2: string;
  currency: [string];
  flag: string;
  name: string;
  region: string;
  subregion: string;
};

const RegisterScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState<Country>({
    callingCode: '91',
    cca2: 'IN',
    currency: ['INR'],
    flag: 'flag-in',
    name: 'India',
    region: 'Asia',
    subregion: 'Southern Asia',
  });
  const [withFlag, setWithFlag] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const [withModal, setWithModal] = useState(true);
  const [withCallingCodeButton, setWithCallingCodeButton] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const onSelect = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
  };
  const onPress = () => {
    number === ''
      ? showErrMsg('Please enter the mobile number.')
      : number.length < 10 || !/^[0-9]*$/.test(number)
      ? showErrMsg('Enter a valid mobile number.')
      : phoneNumberSigninHandler();
  };
  const showErrMsg = (mes: string) => {
    let unmounted = false;

    if (!unmounted) {
      setMessage(mes);
    }
    setTimeout(() => {
      if (!unmounted) {
        setMessage('');
      }
    }, 4000);

    return () => {
      unmounted = true;
    };
  };
  const phoneNumberSigninHandler = async () => {
    //store phone number in tempUserData async
    try {
      const jsonValue = JSON.stringify({
        number: `+${country.callingCode}${number}`,
      });
      await AsyncStorage.setItem('@tempUserData', jsonValue);
    } catch (e) {
      // saving error
    }

    // do a request to backend server
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseURL}/${ROUTES.auth}/send-sns`, {
        phoneNumber: `+${country.callingCode}${number}`,
      });
      if (response.status === 202) {
        setIsLoading(false);
        setNumber('');
        Alert.alert('You have created');
        //navigate
        navigation.navigate('verification', {
          phoneNumber: `+${country.callingCode}${number}`,
        });
      } else {
        throw new Error('An error has occurred');
      }
    } catch (error) {
      Alert.alert('Failed to do request.');
      setIsLoading(false);
    }
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
            <GradientButtonComponent
              text="Continue"
              onPress={onPress}
              isLoading={isLoading}
            />
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
