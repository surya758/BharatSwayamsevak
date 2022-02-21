import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import GradientButtonComponent from '../../../components/GradientButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'login'
>;

const LoginScreen = () => {
  const passwordRef = useRef<null | TextInput>(null);
  const navigation = useNavigation<authScreenNavigationType>();
  const [number, setNumber] = useState<string | undefined>('');
  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState<string | undefined>('');
  const [message, setMessage] = useState<string | null>('');
  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };
  const onPress = () => {
    number === '' || password === ''
      ? showErrMsg('All fields are mandatory!')
      : console.log('signed in');
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <View style={styles.lowerContainer}>
          <AntDesign
            name="back"
            size={30}
            color="#900"
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
                hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                <Ionicons
                  name={hidePass ? 'eye-off' : 'eye'}
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lowerMargin} />
          <GradientButtonComponent
            text="LOG IN"
            bottomRightRadius={0}
            onPress={onPress}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
