import {Colors, Typography} from '../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {marginBottom: 10},
  flatListSeparator: {
    marginHorizontal: 5,
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 5,
  },
  info: {
    fontSize: 12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    maxWidth: '80%',
  },
  infoView: {
    marginTop: 5,
  },
});

export default styles;
