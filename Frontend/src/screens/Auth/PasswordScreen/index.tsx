import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import GradientButtonComponent from '../../../components/GradientButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'password'
>;

const PasswordScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [hidePass, setHidePass] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

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

  const passwordIsValid = (enteredPassword: string) => {
    setIsPasswordValid(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(
        enteredPassword.trim(),
      ),
    );
    setPassword(enteredPassword);
  };

  const passwordHandler = async () => {
    // checks
    const isPasswordAlright = () => {
      if (password === '') {
        return showErrMsg("Password can't be empty.");
      }
      if (!isPasswordValid) {
        return showErrMsg('Invalid Password.');
      }
      return true;
    };

    //get data from tempUserData
    try {
      const tempData = await AsyncStorage.getItem('@tempUserData');
      if (tempData != null) {
        const newTempData = {...JSON.parse(tempData), password: password};
        await AsyncStorage.setItem(
          '@tempUserData',
          JSON.stringify(newTempData),
        );
      }
    } catch (e) {
      // error reading value
    }

    //navigate
    if (isPasswordAlright() === true) {
      navigation.navigate('referral');
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <View style={styles.lowerContainer}>
          <Fontisto
            name="arrow-left-l"
            size={30}
            color={Colors.BLACK}
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text style={styles.passwordOne}>Password</Text>
            <Text style={styles.passwordTwo}>
              Please enter a password for your account
            </Text>
          </View>
          {message ? (
            <View style={styles.errMsgView}>
              <Text style={styles.errMsg}>{message}</Text>
            </View>
          ) : (
            <View style={styles.notErrMsg} />
          )}
          <View>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={passwordIsValid}
                value={password.trim()}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                placeholder="enter your password"
                textContentType="password"
                placeholderTextColor="grey"
                autoComplete="off"
                secureTextEntry={hidePass ? true : false}
              />
              <TouchableOpacity
                onPress={() => setHidePass(!hidePass)}
                style={styles.eyeStyle}
                hitSlop={{top: 20, bottom: 20, left: 30, right: 30}}>
                <Ionicons
                  name={hidePass ? 'eye-off' : 'eye'}
                  size={24}
                  color={Colors.BLACK}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gradientButton}>
            <GradientButtonComponent
              isLoading={false}
              isActive={isPasswordValid ? true : false}
              text="Continue"
              onPress={passwordHandler}
            />
          </View>
          <Text style={styles.endText}>
            Password must contain at least one numeric digit and a special
            character. Minimum length should be 8.
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default PasswordScreen;
