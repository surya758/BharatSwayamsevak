import {DATA, STATES} from '../../../utils/constants';
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {Colors} from '../../../styles';
import DrawerImageComponent from '../../../components/DrawerImage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {HomeStackParamList} from '../../../navigation/HomeNav';
import MemberComponent from '../../../components/Member';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PickerModalComponent from '../../../components/PickerModal';
import images from '../../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStore} from '../../../context/GlobalContext';

type homeScreenNavigationType = NativeStackNavigationProp<
  HomeStackParamList,
  'home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<homeScreenNavigationType>();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {isAdmin} = useStore();
  const [state, setState] = useState<string>('Select a state');
  const onClose = () => {
    setIsVisible(false);
  };
  const onSelect = (selectedState: string) => {
    console.log(selectedState);
    setState(selectedState);
    setIsVisible(false);
  };
  const title = 'state';

  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={styles.lowerContainer}>
        <View style={styles.photoRingImageView}>
          <ImageBackground
            style={styles.photoRingImageStyle}
            source={images.photoRing}>
            <Image style={styles.userImageStyle} source={images.guy} />
          </ImageBackground>
          <Pressable
            style={{position: 'absolute', left: 0}}
            onPress={() => navigation.openDrawer()}>
            <DrawerImageComponent />
          </Pressable>
          {/*remember to replace true with isAdmin*/}
          {isAdmin ? (
            <Pressable
              style={
                false
                  ? {...styles.addButton, backgroundColor: 'red'}
                  : styles.addButton
              }
              onPress={() => navigation.navigate('addUser')}>
              <FontAwesome5 name="plus" size={24} color="#fff" />
            </Pressable>
          ) : null}
        </View>
        <View style={styles.greetingViewStyle}>
          <Text style={styles.greetingTextLeft}>
            Hola, <Text style={styles.greetingTextRight}>User</Text>
          </Text>
        </View>
        <View style={styles.userIDCardStyle}>
          <View>
            <Text style={styles.idCardHeadingStyle}>Maddy Gibson</Text>
            <View style={styles.idCardTextViewStyle}>
              <Text style={styles.idCardTextAnswerStyle}>STATE</Text>
              <Text style={styles.idCardTextHeadingStyle}>Uttar Pradesh</Text>
            </View>
            <View>
              <Text style={styles.idCardTextAnswerStyle}>POSITION</Text>
              <Text style={styles.idCardTextHeadingStyle}>Volunteer</Text>
            </View>
          </View>
          <Image style={styles.userIDPhotoStyle} source={images.guy} />
        </View>
        <View style={styles.selectorView}>
          <PickerModalComponent
            visible={isVisible}
            items={STATES}
            title={title}
            onClose={onClose}
            onSelect={onSelect}
          />
          <Pressable onPress={() => setIsVisible(true)} style={styles.modal}>
            <Text style={styles.modalText} numberOfLines={1}>
              {state}
            </Text>
            <FontAwesome5
              name="arrow-circle-down"
              size={24}
              color={Colors.BLACK}
            />
          </Pressable>
          <View style={styles.modal}>
            <Text style={{...styles.modalText, fontSize: 16, left: 10}}>
              {STATES.length} More
            </Text>
            <FontAwesome5
              name="arrow-circle-right"
              size={24}
              color={Colors.BLACK}
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <MemberComponent
                name={item.name}
                image={images.guy}
                designation={item.designation}
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
