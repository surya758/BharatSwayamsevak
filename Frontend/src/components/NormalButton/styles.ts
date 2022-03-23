import {Colors, Typography} from '../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: windowWidth * 0.85,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
    shadowColor: Colors.BLACK,
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  textStyle: {
    fontSize: 16,
    color: 'green',
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
