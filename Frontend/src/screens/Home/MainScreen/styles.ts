import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  startReturnView: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 5,
    padding: 10,
    borderColor: Colors.GRAY_MEDIUM,
    alignItems: 'center',
  },
  clickHere: {
    color: Colors.PRIMARY,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  leftOfClickHere: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});

export default styles;
