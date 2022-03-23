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
  eyeStyle: {position: 'absolute', zIndex: 5, right: 10, top: 15},
  input: {
    height: 52,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    borderColor: Colors.PRIMARY,
    borderBottomWidth: 2,
    backgroundColor: Colors.BACKGROUND_ALT,
    paddingLeft: 6,
    marginBottom: 16,
  },
  gradientButton: {alignItems: 'center'},
});

export default styles;
