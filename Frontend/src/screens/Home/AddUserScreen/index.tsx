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
import {ROUTES, STATES, baseURL} from '../../../utils/constants';
import React, {useEffect, useRef, useState} from 'react';

import GradientButtonComponent from '../../../components/GradientButton';
import {HomeStackParamList} from '../../../navigation/HomeNav';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'addUser'
>;
type tempUserDataType = {
  name: string;
  donation: string;
  state: string;
  referrer: string;
};

const ShowFields = (props: any) => {
  return (
    <View style={styles.fields}>
      <Text style={styles.fieldText}>{props.str}</Text>
    </View>
  );
};

const AddUserScreen = () => {
  const designationRef = useRef<null | TextInput>(null);
  const navigation = useNavigation<homeScreenNavigationType>();
  const [number, setNumber] = useState('');
  const [tempAddUserData, setTempAddUserData] =
    useState<tempUserDataType | null>(null);

  useEffect(() => {
    console.log(tempAddUserData);
  }, [tempAddUserData]);

  const checkIfUserExistWithThisNumber = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/${ROUTES.users}?phoneNumber=${number}`,
      );
      if (response.data?.results.length) {
        Toast.show({
          type: 'success',
          text2: 'User with this number exists',
          position: 'bottom',
        });
        setTempAddUserData(response.data?.results[0]);
      } else {
        Toast.show({
          type: 'error',
          text2: "user doesn't exist",
          position: 'bottom',
        });
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
            {tempAddUserData ? (
              <View
                style={{
                  marginTop: 30,
                  paddingHorizontal: 10,
                  marginHorizontal: 10,
                }}>
                <View>
                  <Text style={styles.headingStyle}>Name</Text>
                  <ShowFields str={tempAddUserData.name} />
                </View>
                <View>
                  <Text style={styles.headingStyle}>State</Text>
                  {/* <ShowFields str={tempAddUserData.name} /> */}
                </View>
                <View>
                  <Text style={styles.headingStyle}>Referrer</Text>
                  {/* <ShowFields str={tempAddUserData.name} /> */}
                </View>
                <View>
                  <Text style={styles.headingStyle}>Donation Amount</Text>
                  {/* <ShowFields str={tempAddUserData.name} /> */}
                </View>
              </View>
            ) : null}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddUserScreen;
