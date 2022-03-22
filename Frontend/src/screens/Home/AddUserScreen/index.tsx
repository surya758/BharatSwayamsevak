import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Colors, Typography} from '../../../styles';
import {ROUTES, STATES, baseURL} from '../../../utils/constants';
import React, {useRef, useState} from 'react';

import GradientButtonComponent from '../../../components/GradientButton';
import {HomeStackParamList} from '../../../navigation/HomeNav';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'addUser'
>;

const AddUserScreen = () => {
  const designationRef = useRef<null | TextInput>(null);
  const navigation = useNavigation<homeScreenNavigationType>();
  const [number, setNumber] = useState('');

  const checkIfUserExistWithThisNumber = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/${ROUTES.users}?phoneNumber=${number}`,
      );
      if (response.data?.results.length) {
        Alert.alert('user with this number exists');
      } else {
        Alert.alert("user doesn't exist");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <View>
            <Text style={styles.headingText}>Enter Mobile Number</Text>
            <TextInput
              style={styles.mobileNumber}
              value={number}
              autoFocus
              onChangeText={setNumber}
              maxLength={10}
            />
            <View style={styles.buttonContainer}>
              <GradientButtonComponent
                text="Check"
                onPress={checkIfUserExistWithThisNumber}
                isActive={number.length === 10 ? true : false}
                isLoading={false}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddUserScreen;
