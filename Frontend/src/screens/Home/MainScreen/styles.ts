import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  event: {flexDirection: 'row'},
  startScreenReturnView: {
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
  eventBoxView: {padding: 10},
  eventBoxTitle: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    paddingLeft: 5,
  },
  flatListSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.GRAY_DARK,
  },
  flatListFooter: {borderBottomWidth: 5, borderBottomColor: Colors.GRAY_MEDIUM},
});

export default styles;
