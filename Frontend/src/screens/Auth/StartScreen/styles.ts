import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  adminContainer: {flexDirection: 'row'},
  beforeAdminText: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  tinyLogo: {
    width: 220,
    height: 220,
    zIndex: 5,
    top: 30,
  },
  upperBox: {flex: 1},
  bottomBox: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  adminText: {
    color: Colors.PRIMARY,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  gradient: {marginVertical: 16},
  adminBox: {marginBottom: 30},
});

export default styles;
