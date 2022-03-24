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
  moreView: {
    marginBottom: 16,
    backgroundColor: Colors.PRIMARY,
    alignSelf: 'flex-end',
    padding: 5,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 25,
    paddingHorizontal: 12,
    shadowColor: Colors.BLACK,
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  moreText: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});

export default styles;
