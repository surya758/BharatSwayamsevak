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
import CountryPicker from 'react-native-country-picker-modal';
import GradientButtonComponent from '../../../components/GradientButton/GradientButtonComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
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
  const [number, setNumber] = useState<string | undefined>('');
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
    console.log('+' + country.callingCode + number);
    navigation.navigate('verification');
  };

  return (
    <SafeAreaView style={styles.upperContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.lowerContainer}>
          <Icon
            name="back"
            size={30}
            color="#900"
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text style={styles.registerOne}>Register</Text>
            <Text style={styles.registerTwo}>Enter your phone number</Text>
            <Text style={styles.registerThree}>
              Please confirm your country code and enter your phone number
            </Text>
          </View>
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
                number ? styles.inputStyleWithout : styles.inputStyleOnChange
              }
              onChangeText={setNumber}
              value={number}
              placeholder="enter your mobile number"
              keyboardType="numeric"
              maxLength={10}
              autoComplete="off"
            />
          </View>
          <GradientButtonComponent
            text="CONTINUE"
            bottomRightRadius={0}
            onPress={() => onPress()}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default RegisterScreen;
