import {Colors, Typography} from '../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topContainer: {flex: 1},
  container: {
    backgroundColor: Colors.PRIMARY,
  },
  topDrawerView: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.BLACK,
  },
  nameText: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_16,
    marginLeft: 10,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  drawerView: {flex: 1, backgroundColor: Colors.WHITE, paddingTop: 10},
  lowerContainer: {
    padding: 20,
    borderTopColor: Colors.BLACK,
    borderTopWidth: 1,
  },
  shareText: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    fontSize: 16,
    padding: 5,
  },
  shareTextView: {padding: 10, flexDirection: 'row', alignItems: 'center'},
  signoutTextView: {padding: 10, flexDirection: 'row', alignItems: 'center'},
  signoutText: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    fontSize: 16,
    padding: 5,
  },
});

export default styles;
