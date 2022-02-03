import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../res/colors';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  linearGradient: {
    width: windowWidth * 0.8,
    borderRadius: 6,
    height: 50,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.white,
  },
});

export default styles;
