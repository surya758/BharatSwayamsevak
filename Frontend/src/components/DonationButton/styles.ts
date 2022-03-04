import {Colors, Typography} from '../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: (windowWidth - 60) / 2,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,

    // IOS
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.2,

    // Android
    elevation: 3,
  },
  textStyle: {
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
});

export default styles;
