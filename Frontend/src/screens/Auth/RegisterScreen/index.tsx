/* eslint-disable @typescript-eslint/no-unused-vars */
import {Alert, SafeAreaView, Text, TextInput, View} from 'react-native';
import {ROUTES, baseURL} from '../../../utils/constants';
import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/Fontisto';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'register'
>;

const RegisterScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
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
    const phoneNumber = `+91${number}`;
    //check if mobile number already in use?
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseURL}/${ROUTES.users}`);
      const isNumberTaken = response.data.results.map(el =>
        el.phoneNumber === phoneNumber ? true : false,
      );
      if (isNumberTaken.find(el => el === true) === true) {
        showErrMsg('Number is already in use.');
        setNumber('');
        return setIsLoading(false);
      }
    } catch (e) {
      Alert.alert('Failed to verify.');
      setNumber('');
      return setIsLoading(false);
    }

    //store phone number in tempUserData async
    try {
      const jsonValue = JSON.stringify({
        number: phoneNumber,
      });
      await AsyncStorage.setItem('@tempUserData', jsonValue);
    } catch (e) {
      // saving error
    }

    // do a request to backend server

    try {
      const response = await axios.post(`${baseURL}/${ROUTES.auth}/send-sns`, {
        phoneNumber: phoneNumber,
      });
      if (response.status === 202) {
        setIsLoading(false);
        setNumber('');
        //navigate
        navigation.navigate('verification', {
          phoneNumber: phoneNumber,
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
    <SafeAreaView style={styles.upperContainer}>
      <View style={styles.lowerContainer}>
        <Icon
          name="arrow-left-l"
          size={30}
          color={Colors.BLACK}
          style={styles.backIconStyle}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text style={styles.registerOne}>Register</Text>
          <Text style={styles.registerTwo}>Please enter your phone number</Text>
        </View>
        {message ? (
          <View style={styles.errMsgView}>
            <Text style={styles.errMsg}>{message}</Text>
          </View>
        ) : (
          <View style={styles.notErrMsg} />
        )}
        <View style={styles.countryPickerStyle}>
          <TextInput
            style={
              number.trim()
                ? styles.inputStyleWithout
                : styles.inputStyleOnChange
            }
            onChangeText={setNumber}
            value={number?.trim()}
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
            isActive={number.length === 10 ? true : false}
            isLoading={isLoading}
          />
        </View>
        <Text style={styles.endText}>
          We will send a text with a verification code. Message and data rates
          may apply.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
