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
import React, {useRef, useState} from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GradientButtonComponent from '../../../components/GradientButton';
import {HomeStackParamList} from '../../../navigation/HomeNav';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PickerModalComponent from '../../../components/PickerModal';
import {STATES} from '../../../utils/constants';
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

  const onPress = () => {
    console.log('checked');
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
            <View style={{marginTop: 20, alignItems: 'center'}}>
              <GradientButtonComponent
                text="Check"
                onPress={onPress}
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
