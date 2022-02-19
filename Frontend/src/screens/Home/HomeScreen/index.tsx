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

import DashedLine from 'react-native-dashed-line';
import DrawerImageComponent from '../../../components/DrawerImage/DrawerImageComponent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MemberComponent from '../../../components/Member/MemberComponent';
import PickerModalComponent from '../../../components/PickerModal/PickerModalComponent';
import images from '../../../res/images';
import styles from './styles';

const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [state, setState] = useState<string | undefined>('Select a state');
  const onClose = () => {
    setIsVisible(false);
  };
  const onSelect = (selectedState: string) => {
    console.log(selectedState);
    setState(selectedState);
    setIsVisible(false);
  };
  const items = ['Bihar', 'Uttar Pradesh', 'Rajasthan'];
  const title = 'state';
  const DATA = [
    {name: 'Surya', id: '1', designation: 'Accredited Estate Planner'},
    {
      name: 'Krishna',
      id: '2',
      designation: 'Certified Wealth Smart Strategist',
    },
    {name: 'Rajveer', id: '3', designation: 'Registered Fiduciary'},
  ];
  return (
    <SafeAreaView style={styles.upperContainer}>
      <View style={styles.lowerContainer}>
        <View style={styles.photoRingImageView}>
          <ImageBackground
            style={styles.photoRingImageStyle}
            source={images.photoRing}>
            <Image style={styles.userImageStyle} source={images.guy} />
          </ImageBackground>
          <DrawerImageComponent />
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
        <DashedLine
          dashLength={7.2}
          dashThickness={1.6}
          style={styles.dashLineStyle}
        />
        <View style={styles.selectorView}>
          <PickerModalComponent
            visible={isVisible}
            items={items}
            title={title}
            onClose={onClose}
            onSelect={onSelect}
            value="Bihar"
          />
          <Pressable onPress={() => setIsVisible(true)} style={styles.modal}>
            <Text style={styles.modalText}>{state}</Text>
            <FontAwesome5 name="arrow-circle-down" size={24} color="#000" />
          </Pressable>
          <View style={styles.modal}>
            <Text style={{...styles.modalText, fontSize: 16, left: 10}}>
              {items.length} More
            </Text>
            <FontAwesome5 name="arrow-circle-right" size={24} color="#000" />
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
