import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../res/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    width: windowWidth * 0.85,
  },
  buttonText: {
    fontSize: 16,
    margin: 10,
    color: colors.white,
    fontFamily: 'Roboto-Medium',
  },
  animated: {
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default styles;
