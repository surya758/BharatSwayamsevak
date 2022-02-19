import {Platform, StyleSheet} from 'react-native';

import colors from '../../../res/colors';

export const CELL_SIZE = 70;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = colors.white;
export const NOT_EMPTY_CELL_BG_COLOR = colors.saffron;
export const ACTIVE_CELL_BG_COLOR = colors.saffron;

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  lowerContainer: {
    marginHorizontal: 20,
  },
  backIconStyle: {
    marginTop: 30,
  },
  verificationOne: {
    fontFamily: 'Comfortaa-Regular',
    marginVertical: 10,
    fontSize: 36,
  },
  verificationTwo: {
    fontFamily: 'Comfortaa-Regular',
    marginBottom: 10,
    fontSize: 16,
  },
  verificationThree: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '900',
  },
  codeFieldRoot: {
    height: CELL_SIZE,
    marginTop: 30,
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
    color: '#3759b8',
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================
  verifyButton: {
    marginTop: 30,
  },
});

export default styles;
