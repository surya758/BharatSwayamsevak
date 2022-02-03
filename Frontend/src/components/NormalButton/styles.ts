import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../res/colors';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: windowWidth * 0.8,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  textStyle: {
    fontSize: 20,
    color: colors.green,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
