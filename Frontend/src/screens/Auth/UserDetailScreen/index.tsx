import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PickerModalComponent from '../../../components/PickerModal';
import {STATES} from '../../../utils/constants';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'userDetail'
>;

const UserDetailScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [designation, setDesignation] = useState('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [state, setState] = useState<string>('Select a state');

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  const onClose = () => {
    setIsVisible(false);
  };
  const onSelect = (selectedState: string) => {
    setState(selectedState);
    setIsVisible(false);
  };

  const title = 'state';

  const onPress = () => {
    name === '' || designation === ''
      ? showErrMsg('All fields are mandatory.')
      : detailsHandler();
  };

  const detailsHandler = async () => {
    //storing data to tempUserData
    try {
      const tempData = await AsyncStorage.getItem('@tempUserData');
      if (tempData != null) {
        const newTempData = {
          ...JSON.parse(tempData),
          name: name,
          designation: designation,
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
      <View style={styles.lowerContainer}>
        <Icon
          name="back"
          size={30}
          color={Colors.ALERT}
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
        <TextInput
          style={name ? styles.inputWith : styles.inputWithout}
          onChangeText={setName}
          value={name}
          placeholder="enter your name"
          autoComplete="off"
          autoCapitalize="none"
          autoFocus={true}
          placeholderTextColor="grey"
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
          <FontAwesome5 name="arrow-down" size={24} color="#000" />
        </Pressable>
        <TextInput
          style={designation ? styles.inputWith : styles.inputWithout}
          onChangeText={setDesignation}
          value={designation}
          placeholder="enter your designation"
          autoComplete="off"
          autoCapitalize="none"
          placeholderTextColor="grey"
        />
        <View style={styles.gradientButton}>
          <GradientButtonComponent
            isActive={name.length && designation.length > 0 ? true : false}
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
