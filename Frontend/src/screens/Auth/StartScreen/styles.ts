import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 220,
    height: 220,
    zIndex: 5,
    top: 30,
  },
  upperBox: {flex: 1},
  bottomBox: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  adminText: {
    fontSize: 14,
    color: colors.saffron,
    fontWeight: '600',
  },
  gradient: {marginVertical: 16},
  adminBox: {marginBottom: 30},
});

export default styles;
