import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../res/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: (windowWidth - 80) / 2,
    backgroundColor: colors.saffron,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,

    // IOS

    shadowColor: colors.saffron,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.2,

    // Android
    elevation: 3,
  },
  textStyle: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Roboto-Black',
  },
});
export default styles;
