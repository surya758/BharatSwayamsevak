import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  backIconStyle: {
    marginTop: 30,
  },
  passwordOne: {
    fontFamily: 'Comfortaa-Regular',
    marginVertical: 10,
    fontSize: 36,
  },
  passwordTwo: {
    fontFamily: 'Comfortaa-Regular',
    marginBottom: 20,
    fontSize: 16,
  },
  inputWith: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.saffron,
    marginBottom: 30,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.lightGrey,
    marginBottom: 30,
  },
});

export default styles;
