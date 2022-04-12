import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

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
});

export default styles;
