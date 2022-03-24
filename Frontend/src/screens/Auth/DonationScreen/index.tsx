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
import {ROUTES, baseURL} from '../../../utils/constants';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import DashedLine from 'react-native-dashed-line';
import DonationButtonComponent from '../../../components/DonationButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import GradientButtonComponent from '../../../components/GradientButton';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import styles from './styles';
import type {tempUserData} from '../../../states/GlobalState';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../../../context/GlobalContext';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'donation'
>;

const DonationScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [donationAmount, setDonationAmount] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tempUserData, setTempUserData] = useState<tempUserData>({});
  const [wasDonationSuccessful, setWasDonationSuccessful] = useState(false);

  const {setState} = useStore();

  const intDonation: number = parseInt(donationAmount, 10);
  useEffect(() => {
    const loadTempUserData = async () => {
      const jsonValue = await AsyncStorage.getItem('@tempUserData');
      if (jsonValue) {
        setTempUserData(JSON.parse(jsonValue));
      }
    };
    loadTempUserData();
  }, []);

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
      : donationHandler(donationAmount);
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

  const storeTempUserData = async (value: number | string) => {
    //storing donation data to tempUserData
    try {
      const tempData = await AsyncStorage.getItem('@tempUserData');
      if (tempData != null) {
        const newTempData = {
          ...JSON.parse(tempData),
          donation: `${value}`,
        };
        await AsyncStorage.setItem(
          '@tempUserData',
          JSON.stringify(newTempData),
        );
      }
    } catch (e) {
      // error reading value
    }
  };

  const handleUserRegistration = async (val: number | string) => {
    try {
      await axios
        .post(`${baseURL}/${ROUTES.auth}/register`, {
          name: tempUserData.name,
          phoneNumber: `${tempUserData.number}`,
          password: tempUserData.password,
          donation: `${val}`,
          state: tempUserData.state,
          referrer: tempUserData.referrer,
          district: tempUserData.district,
        })
        .then(res => storeUserData(res.data))
        .then(() => removeTempUserData())
        .then(() => setState('refresh'));
    } catch (error) {
      setIsLoading(false);
    }
  };

  const storeUserData = async (response: any) => {
    try {
      await AsyncStorage.setItem('@userData', JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  };

  const removeTempUserData = async () => {
    // delete value from async for tempUserData
    try {
      await AsyncStorage.removeItem('@tempUserData');
    } catch (e) {
      // error reading value
    }
  };

  const donationHandler = async (value: number | string) => {
    setIsLoading(true);

    // checking if donation was successful
    setWasDonationSuccessful(true);

    // persist it on local storage
    storeTempUserData(value);
    const val = value;

    // register the user
    handleUserRegistration(val);

    setIsLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.lowerContainer}>
            <Fontisto
              name="arrow-left-l"
              size={30}
              color={Colors.BLACK}
              style={styles.backIconStyle}
              onPress={createTwoButtonAlert}
            />
            <View>
              <Text style={styles.donationOne}>Donation</Text>
              <Text style={styles.donationTwo}>Choose a donation amount</Text>
            </View>
            <View>
              <View style={styles.donationButtonStyle}>
                <DonationButtonComponent
                  value={101}
                  onPress={donationHandler}
                />
                <DonationButtonComponent
                  value={501}
                  onPress={donationHandler}
                />
              </View>
              <View style={styles.donationButtonStyle}>
                <DonationButtonComponent
                  value={1001}
                  onPress={donationHandler}
                />
                <DonationButtonComponent
                  value={5001}
                  onPress={donationHandler}
                />
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
            <View style={{marginBottom: 10}} />
            <View>
              <View style={styles.eyeStyle}>
                <FontAwesome name="rupee" size={20} color={Colors.ALERT} />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={setDonationAmount}
                value={donationAmount.trim()}
                placeholder="enter a custom donation amount"
                keyboardType="numeric"
                placeholderTextColor="grey"
                autoComplete="off"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.gradientDonationButtonView}>
              <GradientButtonComponent
                text="Donate"
                isActive={intDonation > 9 ? true : false}
                onPress={onPressDonate}
                isLoading={isLoading}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default DonationScreen;
