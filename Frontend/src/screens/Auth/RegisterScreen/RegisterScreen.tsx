import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

import CountryPicker from 'react-native-country-picker-modal';
import GradientButtonComponent from '../../../components/GradientButton/GradientButtonComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const RegisterScreen = () => {
  const [number, setNumber] = useState(null);
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState({
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
  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  const onPress = () => {
    console.log('+' + country.callingCode + number);
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
            text="PROCEED"
            bottomRightRadius={0}
            onPress={onPress}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default RegisterScreen;
