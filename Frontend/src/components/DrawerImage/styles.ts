import {Colors} from '../../styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  drawerViewStyle: {
    width: 70,
    height: 70,
    borderRadius: 70,
    position: 'absolute',
    backgroundColor: Colors.PRIMARY,
    left: 10,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
