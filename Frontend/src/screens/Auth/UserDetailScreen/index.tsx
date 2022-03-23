import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/Fontisto';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'userDetail'
>;

const UserDetailScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  useEffect(() => {
    setDistrict('');
  }, [state]);

  const getBackDataFromStateScreen = (data: string) => {
    setState(data);
  };
  const getBackDataFromDistrictScreen = (data: string) => {
    setDistrict(data);
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
            navigation.navigate('state', {
              getBackData: getBackDataFromStateScreen,
            })
          }
          style={styles.stateView}>
          <Text style={styles.stateText1}>State</Text>
          <Text style={styles.stateText2}>{state}</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('district', {
              getBackData: getBackDataFromDistrictScreen,
              state: state,
            })
          }
          style={styles.stateView}>
          <Text style={styles.stateText1}>District</Text>
          <Text style={styles.stateText2}>{district}</Text>
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
