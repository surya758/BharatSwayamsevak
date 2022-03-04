import {
  Alert,
  Keyboard,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'referral'
>;

const ReferralScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [referrerCode, setReferrerCode] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isReferrerAvailable, setIsReferrerAvailable] =
    useState<boolean>(false);

  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };
  const onPress = () => {
    if (referrerCode) {
      !isReferrerAvailable
        ? showErrMsg('Invalid referral code.')
        : navigation.navigate('userDetail');
    } else {
      navigation.navigate('userDetail');
    }
  };
  const createTwoButtonAlert = () => {
    Alert.alert(
      'Are you sure?',
      'You will exit this sign-up process and all your information will be deleted.',
      [
        {
          text: 'NO',
          onPress: () => null,
          style: 'destructive',
        },
        {text: 'YES', onPress: () => navigation.navigate('start')},
      ],
    );
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <View style={styles.lowerContainer}>
          <Icon
            name="back"
            size={30}
            color={Colors.ALERT}
            style={styles.backIconStyle}
            onPress={createTwoButtonAlert}
          />
          <Text style={styles.detailsOne}>Referral</Text>
          <Text style={styles.detailsTwo}>Who referred you?</Text>
          {message ? (
            <View style={styles.errMsgView}>
              <Text style={styles.errMsg}>{message}</Text>
            </View>
          ) : (
            <View style={styles.notErrMsg} />
          )}
          <TextInput
            style={referrerCode ? styles.inputWith : styles.inputWithout}
            onChangeText={setReferrerCode}
            value={referrerCode?.trim()}
            placeholder="enter your referrer's code"
            autoComplete="off"
            autoCapitalize="none"
            maxLength={8}
            autoFocus={true}
            placeholderTextColor="grey"
          />
          <View style={styles.gradientButton}>
            <GradientButtonComponent text="Continue" onPress={onPress} />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ReferralScreen;