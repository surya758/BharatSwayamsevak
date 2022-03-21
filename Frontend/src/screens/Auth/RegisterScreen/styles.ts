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
  registerOne: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginVertical: 10,
    fontSize: Typography.FONT_SIZE_36,
  },
  errMsgView: {height: 18, marginBottom: 10},
  errMsg: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    textAlign: 'center',
    color: Colors.ALERT,
  },
  notErrMsg: {height: 18, marginBottom: 10},
  registerTwo: {
    marginBottom: 10,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
    paddingLeft: 2,
  },
  inputStyleWithout: {
    textAlign: 'center',
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    flex: 1,
    borderRadius: 6,
    borderColor: Colors.PRIMARY,
    fontSize: 20,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  inputStyleOnChange: {
    flexDirection: 'row',
    textAlign: 'center',
    height: 50,
    borderWidth: 2,
    flex: 1,
    borderRadius: 6,
    borderColor: Colors.GRAY_MEDIUM,
  },
  countryPickerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
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
