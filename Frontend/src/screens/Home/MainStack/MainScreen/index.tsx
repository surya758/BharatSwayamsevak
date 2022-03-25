import * as React from 'react';

import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {events, members} from '../../../../utils/dummyData';

import CustomCommitteeComponent from '../../../../components/CustomCommitteeComponent';
import CustomEventComponent from '../../../../components/CustomEventComponent';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {HomeStackParamList} from '../../../../navigation/HomeStackNav';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../../../../context/GlobalContext';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'main'
>;
const MainScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();
  const {state, district} = useStore();
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
            <Fontisto name="persons" size={18} />
            <Text style={styles.eventBoxTitle}>Committee Members</Text>
          </View>
          <View style={styles.committeeView}>
            {/* rendering national committee members */}
            <Text style={styles.committeeTitle}>National Committee</Text>
            <CustomCommitteeComponent members={members} />
            {/* rendering state committee members */}
            <View style={styles.stateCommitteeHeader}>
              <Text style={styles.stateCommitteeTitle}>State Committee</Text>
              <Pressable
                onPress={() => navigation.navigate('state')}
                style={{}}>
                <Text style={styles.stateText}>{state || 'Select state'}</Text>
              </Pressable>
            </View>
            <CustomCommitteeComponent members={members} />
            {/* rendering district committee members */}
            <View style={styles.stateCommitteeHeader}>
              <Text style={styles.stateCommitteeTitle}>District Committee</Text>
              <Pressable
                onPress={() => navigation.navigate('district')}
                style={{}}>
                <Text style={styles.stateText}>
                  {district || 'Select district'}
                </Text>
              </Pressable>
            </View>
            <CustomCommitteeComponent members={members} />
          </View>
        </View>
        <View style={styles.flatListFooter} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
