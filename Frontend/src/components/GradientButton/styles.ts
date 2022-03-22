import {Colors, Typography} from '../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    width: windowWidth * 0.85,
  },
  buttonText: {
    fontSize: 16,
    margin: 10,
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    textTransform: 'uppercase',
  },
  animated: {
    borderRadius: 8,
    shadowColor: Colors.BLACK,
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default styles;
