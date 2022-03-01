import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../res/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: colors.background,
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
    backgroundColor: colors.saffron,
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
    backgroundColor: colors.lightGreen,
    height: 200,
    width: windowWidth - 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    shadowColor: colors.green,
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
    borderColor: colors.black,
  },
  greetingViewStyle: {alignItems: 'center', margin: 16},
  greetingTextLeft: {fontFamily: 'ABeeZee-Italic', fontSize: 16},
  greetingTextRight: {fontFamily: 'Comfortaa-Regular', fontSize: 20},
  idCardTextViewStyle: {paddingVertical: 10},
  idCardHeadingStyle: {fontSize: 24, fontFamily: 'SourceSansPro-Bold'},
  idCardTextHeadingStyle: {fontSize: 14, fontFamily: 'SourceSansPro-SemiBold'},
  idCardTextAnswerStyle: {fontSize: 12, fontFamily: 'Abel-Regular'},
  modal: {
    padding: 8,
    backgroundColor: colors.lightGreen,
    borderRadius: 6,
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 5,
    shadowColor: colors.green,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.2,
  },
  modalText: {
    fontFamily: 'SourceSansPro-SemiBold',
  },
  selectorView: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default styles;
