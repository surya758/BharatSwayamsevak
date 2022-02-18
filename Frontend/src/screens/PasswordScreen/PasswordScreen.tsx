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
import GradientButtonComponent from '../../components/GradientButton/GradientButtonComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const PasswordScreen = () => {
  const [hidePass, setHidePass] = useState(true);
  const [password, onChangePassword] = useState(null);
  const onPress = () => {
    console.log('hello');
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <AntDesign
          name="back"
          size={30}
          color="#900"
          style={styles.backIconStyle}
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
              placeholder="enter your password"
              textContentType="password"
              secureTextEntry={hidePass ? true : false}
            />
            <TouchableOpacity
              onPress={() => setHidePass(!hidePass)}
              style={{position: 'absolute', zIndex: 5, right: 10, top: 10}}>
              <Ionicons
                name={hidePass ? 'eye-off' : 'eye'}
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </View>
        <GradientButtonComponent
          text="REGISTER"
          bottomRightRadius={0}
          onPress={onPress}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default PasswordScreen;
