import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'userDetail'
>;

const UserDetailScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [designation, setDesignation] = useState<string | undefined>('');
  const [message, setMessage] = useState<string>('');
  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };
  const onPress = () => {
    designation === ''
      ? showErrMsg('All fields are mandatory!')
      : navigation.navigate('donation');
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
          style={designation ? styles.inputWith : styles.inputWithout}
          onChangeText={setDesignation}
          value={designation}
          placeholder="enter your designation"
          autoComplete="off"
          autoCapitalize="none"
          autoFocus={true}
          placeholderTextColor="grey"
        />
        <GradientButtonComponent text="Continue" onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

export default UserDetailScreen;
