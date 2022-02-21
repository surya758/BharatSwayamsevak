import {
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

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
  const navigation = useNavigation<homeScreenNavigationType>();
  const [designation, setDesignation] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [message, setMessage] = useState<string>('');

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
            autoComplete="off"
            autoCapitalize="none"
          />
          <Text style={styles.header}>State</Text>
          <TextInput
            style={state ? styles.inputWith : styles.inputWithout}
            onChangeText={setState}
            value={state}
            placeholder="enter the state"
            autoComplete="off"
            autoCapitalize="none"
          />
          <Text style={styles.header}>Designation</Text>
          <TextInput
            style={designation ? styles.inputWith : styles.inputWithout}
            onChangeText={setDesignation}
            value={designation}
            placeholder="enter the designation"
            autoComplete="off"
            autoCapitalize="none"
          />
          <View style={styles.button}>
            <GradientButtonComponent
              text="ADD USER"
              bottomRightRadius={0}
              onPress={onPress}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddUserScreen;
