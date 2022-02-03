import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import GradientButtonComponent from '../../components/GradientButton/GradientButtonComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const LoginScreen = () => {
  const [number, onChangeNumber] = useState(null);
  const [password, onChangePassword] = useState(null);
  const onPress = () => {
    console.log('hello');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="back" size={30} color="#900" style={styles.backIconStyle} />
      <View>
        <Text style={styles.loginOne}>Log in</Text>
        <Text style={styles.loginTwo}>Sign in to your account</Text>
      </View>
      <View style={{}}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="enter your mobile number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="enter your password"
        />
      </View>
      <GradientButtonComponent
        text="LOG IN"
        bottomRightRadius={0}
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
