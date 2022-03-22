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
import {useStore} from '../../../context/GlobalContext';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'addUser'
>;
type tempUserDataType = {
  name: string;
  donation: string;
  state: string;
  designation: string;
  id: string;
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
  const {userData} = useStore();
  const [isLoading, setIsLoading] = useState(false);
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
      if (response.data.results[0].added === true) {
        return Toast.show({
          type: 'info',
          text2: 'User with this number is already added',
          position: 'bottom',
        });
      }
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
          text2: "User with this number doesn't exist",
          position: 'bottom',
        });
      }
    } catch (e) {
      Toast.show({
        type: 'error',
        text2: "User with this number doesn't exist",
        position: 'bottom',
      });
    }
  };

  const addUserHandler = async () => {
    try {
      let config = {
        headers: {
          Authorization: 'Bearer ' + userData.tokens.access.token,
        },
      };

      let data = {
        added: true,
      };
      const response = await axios.patch(
        `${baseURL}/${ROUTES.users}/${tempAddUserData?.id}`,
        data,
        config,
      );
      if (response) {
        Toast.show({
          type: 'success',
          text2: 'Successfully added user',
          position: 'bottom',
        });
      }
    } catch (e) {
      console.log(e);
      Toast.show({
        type: 'error',
        text2: 'Something went wrong',
        position: 'bottom',
      });
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
              <View style={styles.lowerContainer}>
                <View>
                  <Text style={styles.headingStyle}>Name</Text>
                  <ShowFields str={tempAddUserData.name} />
                </View>
                <View>
                  <Text style={styles.headingStyle}>State</Text>
                  <ShowFields str={tempAddUserData.state} />
                </View>
                <View>
                  <Text style={styles.headingStyle}>Designation</Text>
                  <ShowFields str={tempAddUserData.designation} />
                </View>
                <View>
                  <Text style={styles.headingStyle}>Donation Amount</Text>
                  <ShowFields str={tempAddUserData.donation} />
                </View>
                <View style={{...styles.buttonContainer, marginTop: 0}}>
                  <GradientButtonComponent
                    text="Add User"
                    onPress={addUserHandler}
                    isActive={true}
                    isLoading={false}
                  />
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
