import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';
import GradientButtonComponent from '../../components/GradientButton/GradientButtonComponent';
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
    <SafeAreaView style={styles.container}>
      <Icon name="back" size={30} color="#900" style={styles.backIconStyle} />
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
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          placeholder="enter your mobile number"
          keyboardType="numeric"
          maxLength={10}
        />
      </View>
      <GradientButtonComponent
        text="PROCEED"
        bottomRightRadius={0}
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
