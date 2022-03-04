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
  eyeStyle: {position: 'absolute', zIndex: 5, right: 10, top: 10},
  passwordOne: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginVertical: 10,
    fontSize: Typography.FONT_SIZE_36,
  },
  passwordTwo: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 10,
    fontSize: Typography.FONT_SIZE_16,
  },
  inputWith: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 6,
    borderColor: Colors.PRIMARY,
    marginBottom: 20,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 6,
    borderColor: Colors.GRAY_MEDIUM,
    marginBottom: 20,
  },
  gradientButton: {alignItems: 'center'},
  endText: {
    marginTop: 20,
    fontSize: 12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    width: windowWidth * 0.85,
    alignSelf: 'center',
  },
});

export default styles;
