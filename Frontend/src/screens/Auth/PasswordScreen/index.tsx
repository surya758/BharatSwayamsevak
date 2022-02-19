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
import GradientButtonComponent from '../../../components/GradientButton/GradientButtonComponent';
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
  const [password, onChangePassword] = useState<string | undefined>('');
  const onPress = () => {
    console.log('hello');
    navigation.navigate('user detail');
  };
  return (
    <SafeAreaView style={styles.upperContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.lowerContainer}>
          <AntDesign
            name="back"
            size={30}
            color="#900"
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text style={styles.passwordOne}>Enter password</Text>
            <Text style={styles.passwordTwo}>
              Enter a password for your account
            </Text>
          </View>
          <View>
            <View>
              <TextInput
                style={password ? styles.inputWith : styles.inputWithout}
                onChangeText={onChangePassword}
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="enter your password"
                textContentType="password"
                secureTextEntry={hidePass ? true : false}
              />
              <TouchableOpacity
                onPress={() => setHidePass(!hidePass)}
                style={styles.eyeStyle}>
                <Ionicons
                  name={hidePass ? 'eye-off' : 'eye'}
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
          <GradientButtonComponent
            text="CONTINUE"
            bottomRightRadius={0}
            onPress={onPress}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default PasswordScreen;
