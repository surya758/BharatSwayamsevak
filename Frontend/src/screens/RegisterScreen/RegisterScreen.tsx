import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import GradientButtonComponent from '../../components/GradientButton/GradientButtonComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const RegisterScreen = () => {
  const [number, onChangeNumber] = useState(null);
  const onPress = () => {
    console.log('hello');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="back" size={30} color="#900" style={styles.backIconStyle} />
      <View>
        <Text style={styles.registerOne}>Register</Text>
        <Text style={styles.registerTwo}>Enter your phone number</Text>
        <Text style={styles.registerThree}>
          Please confirm your country code and enter your phone number
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="enter your mobile number"
          keyboardType="numeric"
        />
      </View>
      <GradientButtonComponent
        text="PROCEED"
        bottomRightRadius={0}
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;
