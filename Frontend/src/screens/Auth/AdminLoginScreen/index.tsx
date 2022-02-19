import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import GradientButtonComponent from '../../../components/GradientButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'admin login'
>;

const AdminLoginScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [number, setNumber] = useState<string | undefined>('');
  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState<string | undefined>('');
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
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text style={styles.loginOne}>Admin Log in</Text>
          <Text style={styles.loginTwo}>Sign in to your account</Text>
        </View>
        <View>
          <TextInput
            style={number ? styles.inputWith : styles.inputWithout}
            onChangeText={setNumber}
            value={number}
            placeholder="enter your mobile number"
            keyboardType="numeric"
          />
          <View>
            <TextInput
              style={password ? styles.inputWith : styles.inputWithout}
              onChangeText={setPassword}
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

export default AdminLoginScreen;
