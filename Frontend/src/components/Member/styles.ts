import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../res/colors';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: colors.lightGreen,
    // borderColor: 'black',
    width: windowWidth * 0.3,
    // borderWidth: 1,
    borderRadius: 6,
    marginVertical: 8,
    marginRight: 6,
    alignItems: 'center',
    elevation: 5,
    shadowColor: colors.green,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.2,
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Abel-Regular',
    textAlign: 'center',
  },
});
export default styles;
