import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {states} from '../../../utils/constants';
import styles from './styles';
import {useStore} from '../../../context/GlobalContext';

const StateScreen = () => {
  const [show, setShow] = useState(false);
  let STATES = states.map(a => a.state);
  const {state, setState} = useStore();

  const showTick = (item: string) => {
    setShow(true);
    setState(item);
  };
  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={{marginHorizontal: 16}}>
        <FlatList
          data={STATES}
          keyExtractor={item => item}
          ListHeaderComponent={() => <Text style={styles.state}>STATE</Text>}
          renderItem={({item}) => (
            <Pressable style={styles.itemView} onPress={() => showTick(item)}>
              <Text style={styles.itemText}>{item}</Text>
              {show &&
                (state === item ? <Feather name="check" size={20} /> : null)}
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default StateScreen;
