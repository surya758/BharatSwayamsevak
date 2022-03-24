import {Colors, Typography} from '../../../styles';
import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;

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
  errMsgView: {height: 20, marginBottom: 10},
  errMsg: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    textAlign: 'center',
    color: Colors.ALERT,
  },
  notErrMsg: {height: 20, marginBottom: 10},
  eyeStyle: {position: 'absolute', zIndex: 5, right: 10, top: 12},
  passwordOne: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginVertical: 10,
    fontSize: Typography.FONT_SIZE_36,
  },
  passwordTwo: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 10,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
    paddingLeft: 2,
  },
  input: {
    height: 52,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    borderColor: Colors.PRIMARY,
    borderBottomWidth: 2,
    backgroundColor: Colors.BACKGROUND_ALT,
    paddingLeft: 10,
    fontSize: 14,
    marginBottom: 20,
  },
  gradientButton: {alignItems: 'center'},
  endText: {
    marginTop: 20,
    fontSize: 12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    width: windowWidth * 0.85,
    textAlign: 'center',
  },
});

export default styles;
