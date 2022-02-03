import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  backIconStyle: {
    marginTop: 30,
  },
  loginOne: {
    fontFamily: 'Comfortaa-Regular',
    marginVertical: 10,
    fontSize: 36,
  },
  loginTwo: {
    fontFamily: 'Comfortaa-Regular',
    marginBottom: 20,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.saffron,
    marginBottom: 20,
  },
});

export default styles;