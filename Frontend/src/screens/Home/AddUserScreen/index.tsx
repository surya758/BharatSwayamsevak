import {Alert, SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import GradientButtonComponent from '../../../components/GradientButton';
import {HomeStackParamList} from '../../../navigation/HomeNav';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'add user'
>;

const AddUserScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();
  const [designation, setDesignation] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [state, setState] = useState<string>('');
  const State = ['Bihar', 'Uttar Pradesh', 'Rajasthan'];

  const onPress = () => {
    if (name && State.includes(state) && designation) {
      navigation.navigate('home');
    } else {
      Alert.alert('Error', 'Please fill all the fields', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
  return (
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
  );
};

export default AddUserScreen;
