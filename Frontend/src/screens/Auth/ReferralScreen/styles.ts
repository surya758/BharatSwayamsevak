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
  errMsgView: {height: 20},
  errMsg: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    textAlign: 'center',
    color: Colors.ALERT,
  },
  notErrMsg: {height: 20},
  detailsOne: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginVertical: 10,
    fontSize: Typography.FONT_SIZE_36,
  },
  detailsTwo: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 10,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
    paddingLeft: 2,
  },
  inputWith: {
    height: 52,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    borderColor: Colors.PRIMARY,
    borderBottomWidth: 2,
    backgroundColor: Colors.BACKGROUND_ALT,
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  inputWithout: {
    height: 52,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    borderColor: Colors.PRIMARY,
    borderBottomWidth: 2,
    backgroundColor: Colors.BACKGROUND_ALT,
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  gradientButton: {paddingTop: 10, alignItems: 'center'},
});

export default styles;
