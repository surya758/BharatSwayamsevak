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
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../../../context/GlobalContext';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'referral'
>;

const ReferralScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [referrerCode, setReferrerCode] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {setState, tempUserData} = useStore();
  const [isReferrerAvailable, setIsReferrerAvailable] = useState(false);

  const referralHandler = async () => {
    // checks
    const isRefCodeAlright = () => {
      return referrerCode
        ? !isReferrerAvailable
          ? showErrMsg('Invalid referral code.')
          : true
        : true;
    };

    //store referrer in tempUserData async
    try {
      const jsonValue = JSON.stringify({referrer: referrerCode});
      await AsyncStorage.setItem('@tempUserData', jsonValue);
    } catch (e) {
      // saving error
    }

    // do a request to backend server
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseURL}/${ROUTES.referrals}`, {
        referrerCode: `${referrerCode}`,
      });
      if (response.status === 200) {
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

    // navigate
    if (isRefCodeAlright()) {
      navigation.navigate('userDetail');
    }
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
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <View style={styles.lowerContainer}>
          <Icon
            name="back"
            size={30}
            color={Colors.ALERT}
            style={styles.backIconStyle}
            onPress={createTwoButtonAlert}
          />
          <Text style={styles.detailsOne}>Referral</Text>
          <Text style={styles.detailsTwo}>Who referred you?</Text>
          {message ? (
            <View style={styles.errMsgView}>
              <Text style={styles.errMsg}>{message}</Text>
            </View>
          ) : (
            <View style={styles.notErrMsg} />
          )}
          <TextInput
            style={referrerCode ? styles.inputWith : styles.inputWithout}
            onChangeText={setReferrerCode}
            value={referrerCode?.trim()}
            placeholder="enter your referrer's code"
            autoComplete="off"
            autoCapitalize="none"
            maxLength={8}
            autoFocus={true}
            placeholderTextColor="grey"
          />
          <View style={styles.gradientButton}>
            <GradientButtonComponent
              text="Continue"
              onPress={referralHandler}
              isLoading={isLoading}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ReferralScreen;
