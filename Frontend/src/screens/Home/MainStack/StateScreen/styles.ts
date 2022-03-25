import {Colors, Typography} from '../../../../styles';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  state: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    fontSize: Typography.FONT_SIZE_16,
    marginVertical: 8,
  },
  itemView: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  doneButton: {
    color: Colors.PRIMARY,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});

export default styles;
