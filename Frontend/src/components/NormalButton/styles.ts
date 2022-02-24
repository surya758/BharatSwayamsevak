import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../res/colors';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: windowWidth * 0.8,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
  },
  textStyle: {
    fontSize: 16,
    color: colors.green,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
});

export default styles;
