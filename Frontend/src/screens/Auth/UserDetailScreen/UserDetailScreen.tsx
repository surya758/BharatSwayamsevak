import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

import GradientButtonComponent from '../../../components/GradientButton/GradientButtonComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const UserDetailScreen = () => {
  const [designation, setDesignation] = useState<string | undefined>('');
  const onPress = () => {
    console.log(designation);
  };
  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={styles.lowerContainer}>
        <Icon name="back" size={30} color="#900" style={styles.backIconStyle} />
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
          text="REGISTER"
          bottomRightRadius={0}
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserDetailScreen;
