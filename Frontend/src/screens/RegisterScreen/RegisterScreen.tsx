import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';
import GradientButtonComponent from '../../components/GradientButton/GradientButtonComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../res/colors';
import styles from './styles';

const RegisterScreen = () => {
  const [number, onChangeNumber] = useState(null);
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState(null);
  const [withFlag, setWithFlag] = useState<boolean>(true);
  const [withCallingCode, setWithCallingCode] = useState<boolean>(true);
  const [withModal, setWithModal] = useState<boolean>(true);
  const [withCallingCodeButton, setWithCallingCodeButton] =
    useState<boolean>(true);
  const [withEmoji, setWithEmoji] = useState<boolean>(true);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const onSelect = country => {
    console.log(country.callingCode);
    setCountryCode(country.cca2);
    setCountry(country);
  };
  const onPress = () => {
    console.log('hello');
  };

  const formatePhoneNumber = number => {
    const newText = '';
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 20,
        }}>
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
          onChangeText={onChangeNumber}
          value={number}
          placeholder="enter your mobile number"
          keyboardType="numeric"
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
