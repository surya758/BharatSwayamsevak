import {Colors, Typography} from '../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  eventView: {paddingVertical: 10, flex: 1},
  eventTitle: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK,
    marginBottom: 10,
  },
  image: {
    width: windowWidth * 0.5,
    height: 150,
    borderRadius: 5,
    elevation: 5,
  },
  flatListSeparator: {
    marginHorizontal: 5,
  },
});

export default styles;
