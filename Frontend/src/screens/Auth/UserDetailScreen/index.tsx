import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import {AuthStackParamList} from '../../../navigation/AuthNav';
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'user detail'
>;

const UserDetailScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [designation, setDesignation] = useState<string | undefined>('');
  const onPress = () => {
    console.log(designation);
    navigation.navigate('donation');
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
        <Text style={styles.detailsOne}>Details</Text>
        <Text style={styles.detailsTwo}>Just a few more details...</Text>
        <Text style={styles.designation}>Designation</Text>
        <TextInput
          style={designation ? styles.inputWith : styles.inputWithout}
          onChangeText={setDesignation}
          value={designation}
          placeholder="enter your designation"
          autoComplete="off"
          autoCapitalize="none"
        />
        <GradientButtonComponent
          text="CONTINUE"
          bottomRightRadius={0}
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserDetailScreen;