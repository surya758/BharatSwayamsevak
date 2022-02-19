import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  drawerViewStyle: {
    width: 70,
    height: 70,
    borderRadius: 70,
    position: 'absolute',
    backgroundColor: colors.saffron,
    left: 10,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
