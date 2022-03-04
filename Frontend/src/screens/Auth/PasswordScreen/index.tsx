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

import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
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
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  const onPress = () => {
    password === ''
      ? showErrMsg("Password can't be empty.")
      : !isPasswordValid
      ? showErrMsg('Invalid Password.')
      : navigation.navigate('referral');
  };
  const passwordIsValid = (enteredPassword: string) => {
    setIsPasswordValid(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(
        enteredPassword.trim(),
      ),
    );
    setPassword(enteredPassword);
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
                style={password ? styles.inputWith : styles.inputWithout}
                onChangeText={passwordIsValid}
                value={password.trim()}
                autoCapitalize="none"
                autoCorrect={false}
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
            <GradientButtonComponent text="Continue" onPress={onPress} />
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
