import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import GradientButtonComponent from '../../../components/GradientButton';
import {HomeStackParamList} from '../../../navigation/HomeNav';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'addUser'
>;

const AddUserScreen = () => {
  const designationRef = useRef<null | TextInput>(null);
  const navigation = useNavigation<homeScreenNavigationType>();
  const [designation, setDesignation] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

  const onPress = () => {
    name === '' || designation === '' || state === ''
      ? showErrMsg('All fields are mandatory!')
      : navigation.navigate('home');
  };

  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.lowerContainer}>
            <Icon
              name="back"
              size={30}
              color="#900"
              style={styles.backIconStyle}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.addUserOne}>Add User</Text>
            <Text style={styles.addUserTwo}>
              Fill in the details of new user...
            </Text>
            {message ? (
              <View style={styles.errMsgView}>
                <Text style={styles.errMsg}>{message}</Text>
              </View>
            ) : (
              <View style={styles.notErrMsg} />
            )}
            <Text style={styles.header}>Name</Text>
            <TextInput
              style={name ? styles.inputWith : styles.inputWithout}
              onChangeText={setName}
              value={name}
              placeholder="enter the name"
              returnKeyType="next"
              placeholderTextColor="grey"
              autoComplete="off"
              autoCorrect={false}
              autoFocus={true}
              autoCapitalize="none"
              onSubmitEditing={() => designationRef.current?.focus()}
            />
            <Text style={styles.header}>State</Text>
            <TextInput
              style={state ? styles.inputWith : styles.inputWithout}
              onChangeText={setState}
              value={state}
              autoCorrect={false}
              placeholderTextColor="grey"
              placeholder="enter the state"
              autoComplete="off"
              autoCapitalize="none"
            />
            <Text style={styles.header}>Designation</Text>
            <TextInput
              style={designation ? styles.inputWith : styles.inputWithout}
              onChangeText={setDesignation}
              value={designation}
              placeholderTextColor="grey"
              autoCorrect={false}
              returnKeyType="go"
              placeholder="enter the designation"
              autoComplete="off"
              autoCapitalize="none"
              ref={designationRef}
            />
            <View style={styles.button}>
              <GradientButtonComponent
                text="ADD USER"
                bottomRightRadius={0}
                onPress={onPress}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddUserScreen;
