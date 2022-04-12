import {Colors, Typography} from '../../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  startScreenReturnView: {
    padding: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default styles;
