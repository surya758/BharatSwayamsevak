import {
  Alert,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ROUTES, baseURL} from '../../../utils/constants';
import React, {useRef, useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import GradientButtonComponent from '../../../components/GradientButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../../../context/GlobalContext';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'login'
>;

const LoginScreen = () => {
  const passwordRef = useRef<null | TextInput>(null);
  const navigation = useNavigation<authScreenNavigationType>();
  const [number, setNumber] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {setState} = useStore();
  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };
  const onPress = () => {
    number === '' || password === ''
      ? showErrMsg('All fields are mandatory.')
      : loginHandler();
  };

  const loginHandler = async () => {
    setIsLoading(true);
    try {
      await axios
        .post(`${baseURL}/${ROUTES.auth}/login`, {
          phoneNumber: `+91${number}`,
          password: password,
        })
        .then(res => storeUserData(res.data))
        .then(() => setState('refresh'));
    } catch (error) {
      Alert.alert('Incorrect number or password.');
      setIsLoading(false);
    }
  };

  const storeUserData = async (response: any) => {
    if (response.user.role === 'user') {
      try {
        await AsyncStorage.setItem('@userData', JSON.stringify(response));
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.alert('Go through admin login.');
      setIsLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <View style={styles.lowerContainer}>
          <AntDesign
            name="back"
            size={30}
            color={Colors.ALERT}
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text style={styles.loginOne}>Log in</Text>
            <Text style={styles.loginTwo}>Sign in to your account</Text>
          </View>
          {message ? (
            <View style={styles.errMsgView}>
              <Text style={styles.errMsg}>{message}</Text>
            </View>
          ) : (
            <View style={styles.notErrMsg} />
          )}
          <View>
            <TextInput
              style={number ? styles.inputWith : styles.inputWithout}
              onChangeText={setNumber}
              value={number}
              placeholderTextColor="grey"
              placeholder="enter your mobile number"
              keyboardType="numeric"
              autoFocus={true}
              onSubmitEditing={() => passwordRef?.current?.focus()}
            />
            <View>
              <TextInput
                style={password ? styles.inputWith : styles.inputWithout}
                onChangeText={setPassword}
                value={password}
                placeholder="enter your password"
                textContentType="password"
                secureTextEntry={hidePass ? true : false}
                returnKeyType="go"
                placeholderTextColor="grey"
                autoCapitalize="none"
                ref={passwordRef}
                autoCorrect={false}
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
          <View style={styles.lowerMargin} />
          <View style={styles.gradientButton}>
            <GradientButtonComponent
              text="Login"
              onPress={onPress}
              isLoading={isLoading}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
