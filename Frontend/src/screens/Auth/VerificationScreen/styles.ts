import {Platform, StyleSheet} from 'react-native';

import colors from '../../../res/colors';

export const CELL_SIZE = 60;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = colors.background;
export const NOT_EMPTY_CELL_BG_COLOR = colors.saffron;
export const ACTIVE_CELL_BG_COLOR = colors.background;

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  lowerContainer: {
    marginHorizontal: 16,
  },
  backIconStyle: {
    marginTop: 30,
  },
  verificationOne: {
    fontFamily: 'OpenSans-SemiBold',
    marginVertical: 10,
    fontSize: 36,
  },
  verificationTwo: {
    fontFamily: 'SourceSansPro-SemiBold',
    marginBottom: 10,
    fontSize: 16,
  },
  verificationThree: {
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: colors.grey,
  },
  errMsgView: {height: 20},
  errMsg: {
    textAlign: 'center',
    color: colors.margenta,
    fontFamily: 'OpenSans-SemiBold',
  },
  notErrMsg: {height: 20},
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    ...Platform.select({web: {lineHeight: 65}}),
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: colors.margenta,
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
