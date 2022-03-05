import {Colors, Typography} from '../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: Colors.lightGreen,
    // backgroundColor: Colors.SECONDARY,
    width: windowWidth * 0.3,
    borderRadius: 6,
    marginVertical: 8,
    marginRight: 6,
    alignItems: 'center',
    elevation: 5,
    shadowColor: Colors.SECONDARY,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.2,
    paddingHorizontal: 3,
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginTop: 10,
    borderColor: Colors.BLACK,
    borderWidth: 0.4,
  },
  name: {
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    textAlign: 'center',
    marginTop: 5,
  },
  designation: {
    fontSize: 12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textAlign: 'center',
  },
});
export default styles;
