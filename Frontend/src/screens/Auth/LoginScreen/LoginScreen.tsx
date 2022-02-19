import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import GradientButtonComponent from '../../../components/GradientButton/GradientButtonComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const LoginScreen = () => {
  const [number, onChangeNumber] = useState(null);
  const [hidePass, setHidePass] = useState(true);
  const [password, onChangePassword] = useState(null);
  const onPress = () => {
    console.log('hello');
  };
  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={styles.lowerContainer}>
        <AntDesign
          name="back"
          size={30}
          color="#900"
          style={styles.backIconStyle}
        />
        <View>
          <Text style={styles.loginOne}>Log in</Text>
          <Text style={styles.loginTwo}>Sign in to your account</Text>
        </View>
        <View>
          <TextInput
            style={number ? styles.inputWith : styles.inputWithout}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="enter your mobile number"
            keyboardType="numeric"
          />
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
          text="LOG IN"
          bottomRightRadius={0}
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
