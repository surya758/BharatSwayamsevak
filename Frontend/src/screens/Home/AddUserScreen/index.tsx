import {
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
  const [designation, setDesignation] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [state, setState] = useState<string>('Select a state');
  const [message, setMessage] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;
  const onPress = () => {
    name === '' || designation === '' || state === ''
      ? showErrMsg('All fields are mandatory!')
      : navigation.navigate('home');
  };
  const onClose = () => {
    setIsVisible(false);
  };
  const onSelect = (selectedState: string) => {
    console.log(selectedState);
    setState(selectedState);
    setIsVisible(false);
  };

  const title = 'state';
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
            <Text style={styles.addUserOne}>Add User</Text>
            <Text style={styles.addUserTwo}>
              Fill in the details of the new user...
            </Text>
            {message ? (
              <View style={styles.errMsgView}>
                <Text style={styles.errMsg}>{message}</Text>
              </View>
            ) : (
              <View style={styles.notErrMsg} />
            )}
            <TextInput
              style={name ? styles.inputWith : styles.inputWithout}
              onChangeText={setName}
              value={name}
              placeholder="enter the name"
              returnKeyType="next"
              placeholderTextColor="grey"
              autoComplete="off"
              autoCorrect={false}
              autoCapitalize="none"
              onSubmitEditing={() => designationRef.current?.focus()}
            />
            <PickerModalComponent
              visible={isVisible}
              items={STATES}
              title={title}
              onClose={onClose}
              onSelect={onSelect}
            />
            <Pressable onPress={() => setIsVisible(true)} style={styles.modal}>
              <Text style={styles.modalText} numberOfLines={1}>
                {state}
              </Text>
              <FontAwesome5 name="arrow-circle-down" size={24} color="#000" />
            </Pressable>
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
            <View style={styles.gradientButton}>
              <GradientButtonComponent text="Add user" onPress={onPress} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddUserScreen;
