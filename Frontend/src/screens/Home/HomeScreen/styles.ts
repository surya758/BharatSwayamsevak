import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../res/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  lowerContainer: {
    flex: 1,
    margin: 20,
  },
  userCardStyle: {
    width: windowWidth * 0.9,
    height: 200,
    zIndex: 5,
  },
  photoRingImageStyle: {
    height: 130,
    width: 130,
  },
  photoRingImageView: {
    alignItems: 'center',
  },
  dashLineStyle: {
    overflow: 'hidden',
    marginVertical: 16,
  },
  userImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    top: 14,
    left: 14,
  },
  userIDCardStyle: {
    backgroundColor: colors.lightGreen,
    height: 200,
    width: windowWidth - 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: colors.green,
    borderWidth: 0.4,
  },
  userIDPhotoStyle: {
    height: 150,
    borderRadius: 10,
    width: windowWidth * 0.3,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  greetingViewStyle: {alignItems: 'center', margin: 16},
  greetingTextLeft: {fontFamily: 'ABeeZee-Italic', fontSize: 16},
  greetingTextRight: {fontFamily: 'Comfortaa-Regular', fontSize: 20},
  idCardTextViewStyle: {paddingVertical: 10},
  idCardHeadingStyle: {fontSize: 24, fontFamily: 'SourceSansPro-Bold'},
  idCardTextHeadingStyle: {fontSize: 14, fontFamily: 'SourceSansPro-SemiBold'},
  idCardTextAnswerStyle: {fontSize: 12, fontFamily: 'Abel-Regular'},
});

export default styles;
