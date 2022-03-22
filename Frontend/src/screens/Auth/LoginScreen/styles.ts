import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  lowerContainer: {
    marginHorizontal: 16,
  },
  backIconStyle: {
    marginTop: 30,
  },
  lowerMargin: {marginTop: 10},
  errMsgView: {height: 20},
  errMsg: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    textAlign: 'center',
    color: Colors.ALERT,
  },
  notErrMsg: {height: 20},
  loginOne: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginVertical: 10,
    fontSize: Typography.FONT_SIZE_36,
  },
  loginTwo: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 10,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
    paddingLeft: 2,
  },
  eyeStyle: {position: 'absolute', zIndex: 5, right: 10, top: 20},

  inputWith: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    borderRadius: 6,
    borderColor: Colors.PRIMARY,
    marginVertical: 10,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 6,
    borderColor: Colors.GRAY_MEDIUM,
    marginVertical: 10,
  },
  gradientButton: {alignItems: 'center'},
});

export default styles;
