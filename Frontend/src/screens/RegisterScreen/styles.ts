import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  backIconStyle: {
    marginTop: 30,
  },
  registerOne: {
    fontFamily: 'Comfortaa-Regular',
    marginVertical: 10,
    fontSize: 36,
  },
  registerTwo: {
    fontFamily: 'Comfortaa-Regular',
    marginBottom: 10,
    fontSize: 16,
  },
  registerThree: {
    marginBottom: 20,
    fontFamily: 'Comfortaa-Regular',
    fontSize: 12,
  },
  input: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    marginLeft: 10,
    flex: 1,
    borderRadius: 6,
    borderColor: colors.saffron,
  },
});

export default styles;
