import {Colors, Typography} from '../../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  headingContainer: {marginHorizontal: 16},
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
  inputStyle: {
    textAlign: 'center',
    height: 70,
    backgroundColor: Colors.BACKGROUND_ALT,
    borderColor: Colors.PRIMARY,
    fontSize: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
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
    textAlign: 'center',
  },
});

export default styles;
