import * as React from 'react';

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import CustomEventComponent from '../../../components/CustomEventComponent';
import {HomeStackParamList} from '../../../navigation/HomeNav';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {events} from '../../../utils/dummyData';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'main'
>;
const MainScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.startScreenReturnView}>
          <Text style={styles.leftOfClickHere}>
            Want to register or login?{' '}
          </Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.clickHere}>Click here</Text>
          </Pressable>
        </View>
        <View style={styles.eventBoxView}>
          <View style={styles.event}>
            <MaterialIcons name="event" size={22} />
            <Text style={styles.eventBoxTitle}>Events</Text>
          </View>
          {events.map(event => {
            return <CustomEventComponent event={event} />;
          })}
        </View>
        <View style={styles.flatListFooter} />
        <View style={styles.committeeBoxView}>
          <View style={styles.event}>
            <MaterialIcons name="event" size={22} />
            <Text style={styles.eventBoxTitle}>Events</Text>
          </View>
          <View style={styles.event}>
            <MaterialIcons name="event" size={22} />
            <Text style={styles.eventBoxTitle}>Events</Text>
          </View>
          <View style={styles.event}>
            <MaterialIcons name="event" size={22} />
            <Text style={styles.eventBoxTitle}>Events</Text>
          </View>
          <View style={styles.event}>
            <MaterialIcons name="event" size={22} />
            <Text style={styles.eventBoxTitle}>Events</Text>
          </View>
        </View>
        <View style={styles.flatListFooter} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
