import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  topContainer: {flex: 1},
  container: {
    backgroundColor: colors.saffron,
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
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#000',
  },
  nameText: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Roboto-Medium',
  },
  drawerView: {flex: 1, backgroundColor: colors.white, padding: 10},
  drawerItems: {
    padding: 20,
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  drawerItemViewStyle: {borderWidth: 1, borderColor: 'black'},
  drawerItemLabelStyle: {marginLeft: -25, color: 'black'},
  drawerItem: {padding: 10, flexDirection: 'row', alignItems: 'center'},
  drawerText: {fontFamily: 'Roboto-Medium', fontSize: 16, padding: 5},
});

export default styles;
