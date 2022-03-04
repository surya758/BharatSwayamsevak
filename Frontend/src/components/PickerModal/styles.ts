import {Platform, StyleSheet} from 'react-native';

import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    ...Platform.select({
      android: {
        height: 100,
      },
      ios: {
        height: 200,
      },
    }),

    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    padding: 5,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto-Black',
  },
});
export default styles;
