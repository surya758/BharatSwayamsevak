import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {states} from '../../../utils/constants';
import styles from './styles';

const StateScreen = ({route}) => {
  const [district, setDistrict] = useState('');
  const [show, setShow] = useState(false);
  const {state, getBackData} = route.params;

  let DISTRICTS = states.find(function (ele, index) {
    if (ele.state === state) {
      return true;
    }
  });

  const showTick = (item: string) => {
    setDistrict(item);
    setShow(true);
  };

  useEffect(() => {
    getBackData(district);
  }, [district]);

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

export default StateScreen;
