import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/Fontisto';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PickerModalComponent from '../../../components/PickerModal';
import {states} from '../../../utils/constants';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'userDetail'
>;

const UserDetailScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [isVisible, setIsVisible] = useState(false);
  const [state, setState] = useState('Select a state');
  // const [district, setDistrict] = useState('Select a district');
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  let STATES = states.map(a => a.state);
  // let DISTRICT = states.find(function (ele, index) {
  //   if (ele.state === state) {
  //     return true;
  //   }
  // });
  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  const getBackData = (data: string) => {
    console.log(data);
    setState(data);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  const onPress = () => {
    name === '' ? showErrMsg('All fields are mandatory.') : detailsHandler();
  };

  const detailsHandler = async () => {
    //storing data to tempUserData
    try {
      const tempData = await AsyncStorage.getItem('@tempUserData');
      if (tempData != null) {
        const newTempData = {
          ...JSON.parse(tempData),
          name: name,
          state: state,
        };
        await AsyncStorage.setItem(
          '@tempUserData',
          JSON.stringify(newTempData),
        ).then(() => navigation.navigate('donation'));
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <SafeAreaView style={styles.upperContainer}>
      <View>
        <View style={styles.lowerContainer}>
          <Icon
            name="arrow-left-l"
            size={30}
            color={Colors.BLACK}
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.detailsOne}>Details</Text>
          <Text style={styles.detailsTwo}>Just a few more details...</Text>
          {message ? (
            <View style={styles.errMsgView}>
              <Text style={styles.errMsg}>{message}</Text>
            </View>
          ) : (
            <View style={styles.notErrMsg} />
          )}
        </View>

        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          maxLength={32}
          placeholder="enter your name"
          autoComplete="off"
          autoCapitalize="none"
          autoFocus={true}
          placeholderTextColor="grey"
        />
        <Pressable
          onPress={() =>
            navigation.navigate('state', {getBackData: getBackData})
          }
          style={styles.stateView}>
          <Text style={styles.stateText}>{state}</Text>
        </Pressable>
        <View style={styles.gradientButton}>
          <GradientButtonComponent
            isActive={name.length > 0 ? true : false}
            text="Continue"
            onPress={onPress}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetailScreen;
