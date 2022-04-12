import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {HomeStackParamList} from '../../../../navigation/HomeStackNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {states} from '../../../../utils/constants';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../../../../context/GlobalContext';

type homeNavNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'state'
>;

const DistrictScreen = ({route}) => {
  const navigation = useNavigation<homeNavNavigationType>();
  const [show, setShow] = useState(false);
  const {district, setDistrict, state} = useStore();

  let DISTRICTS = states.find(function (ele, index) {
    if (ele.state === state) {
      return true;
    }
  });

  const showTick = (item: string) => {
    setDistrict(item);
    setShow(true);
  };

  const HeaderComponent = () => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.state}>DISTRICT</Text>
        <Pressable
          onPress={() => navigation.navigate('main')}
          style={styles.doneStyle}>
          <Text style={styles.doneButton}>Done</Text>
          <Ionicons name="checkmark-done" size={20} />
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={{marginHorizontal: 16}}>
        <FlatList
          data={DISTRICTS?.districts}
          keyExtractor={item => item}
          bounces={false}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HeaderComponent />}
          renderItem={({item}) => (
            <Pressable style={styles.itemView} onPress={() => showTick(item)}>
              <Text style={styles.itemText}>{item}</Text>
              {show &&
                (district === item ? <Feather name="check" size={20} /> : null)}
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default DistrictScreen;
