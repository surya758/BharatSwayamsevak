import {Colors, Typography} from '../../../styles';
import {Platform, StyleSheet} from 'react-native';

export const CELL_SIZE = 60;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = Colors.BACKGROUND;
export const NOT_EMPTY_CELL_BG_COLOR = Colors.WHITE;
export const ACTIVE_CELL_BG_COLOR = Colors.BACKGROUND;

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
  doneLottie: {
    width: 40,
    height: 40,
  },
  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  verificationOne: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginVertical: 10,
    fontSize: Typography.FONT_SIZE_36,
  },
  verificationTwo: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 10,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
  },
  verificationThree: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    color: Colors.GRAY_DARK,
    marginRight: 8,
  },
  resendText: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.ALERT,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  errMsgView: {height: 20},
  errMsg: {
    textAlign: 'center',
    color: Colors.ALERT,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  notErrMsg: {height: 20},
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  resendWarningText: {padding: 10, textAlign: 'center', fontSize: 12},
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: Colors.ALERT,
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  verifyButton: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default styles;
