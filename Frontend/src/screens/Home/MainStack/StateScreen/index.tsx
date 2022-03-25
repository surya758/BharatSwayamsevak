import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {HomeStackParamList} from '../../../../navigation/HomeStackNav';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {states} from '../../../../utils/constants';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../../../../context/GlobalContext';

type homeNavNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'state'
>;

const StateScreen = () => {
  const navigation = useNavigation<homeNavNavigationType>();

  const [show, setShow] = useState(false);
  let STATES = states.map(a => a.state);
  const {state, setState} = useStore();

  const showTick = (item: string) => {
    setShow(true);
    setState(item);
  };

  const HeaderComponent = () => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.state}>STATE</Text>
        <Pressable onPress={() => navigation.navigate('main')}>
          <Text style={styles.doneButton}>Done</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={{marginHorizontal: 16}}>
        <FlatList
          data={STATES}
          keyExtractor={item => item}
          ListHeaderComponent={<HeaderComponent />}
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
