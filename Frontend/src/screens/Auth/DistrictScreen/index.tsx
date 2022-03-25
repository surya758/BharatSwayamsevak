import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {states} from '../../../utils/constants';
import styles from './styles';
import {useStore} from '../../../context/GlobalContext';

const DistrictScreen = ({route}) => {
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

  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={{marginHorizontal: 16}}>
        <FlatList
          data={DISTRICTS?.districts}
          keyExtractor={item => item}
          ListHeaderComponent={() => (
            <Text style={styles.state}>DISTRICTS</Text>
          )}
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
