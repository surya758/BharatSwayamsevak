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
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  doneStyle: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
