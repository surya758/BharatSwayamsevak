import {Colors, Typography} from '../../../styles';
import {Dimensions, StyleSheet} from 'react-native';

import {lightGreen} from './../../../styles/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
    zIndex: 5,
  },
  lowerContainer: {
    flex: 1,
    margin: 10,
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
  addButton: {
    width: 70,
    height: 70,
    borderRadius: 70,
    position: 'absolute',
    backgroundColor: Colors.PRIMARY,
    right: 10,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: Colors.lightGreen,
    // backgroundColor: Colors.SECONDARY,
    height: 200,
    width: windowWidth - 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: Colors.SECONDARY,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.2,
    marginBottom: 20,
  },
  userIDPhotoStyle: {
    height: 150,
    borderRadius: 10,
    width: windowWidth * 0.3,
    borderWidth: 0.8,
    borderColor: Colors.BLACK,
  },
  greetingViewStyle: {alignItems: 'center', margin: 16},
  greetingTextLeft: {
    fontFamily: Typography.FONT_FAMILY_MEDIUMITALIC,
    fontSize: 16,
  },
  greetingTextRight: {fontFamily: Typography.FONT_FAMILY_REGULAR, fontSize: 20},
  idCardTextViewStyle: {paddingVertical: 10},
  idCardHeadingStyle: {fontSize: 24, fontFamily: Typography.FONT_FAMILY_BOLD},
  idCardTextHeadingStyle: {
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  idCardTextAnswerStyle: {fontSize: 12, fontFamily: Typography.FONT_FAMILY_ALT},
  modal: {
    padding: 8,
    // backgroundColor: Colors.SECONDARY,
    backgroundColor: Colors.lightGreen,
    borderRadius: 6,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    shadowColor: Colors.SECONDARY,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.2,
  },
  modalText: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    paddingLeft: 6,
  },
  selectorView: {
    borderTopWidth: 1,
    borderTopColor: Colors.BLACK,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  memberTextStyle: {
    fontSize: 18,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    paddingRight: 10,
    paddingLeft: 5,
  },
  memberView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
