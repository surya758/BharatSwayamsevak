import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    margin: 10,
    color: colors.white,
    fontFamily: 'Roboto-Medium',
  },
});

export default styles;
