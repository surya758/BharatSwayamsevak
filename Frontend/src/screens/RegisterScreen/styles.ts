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
    fontFamily: 'ABeeZee-Italic',
    marginVertical: 10,
    fontSize: 36,
  },
  registerTwo: {
    fontFamily: 'ABeeZee-Italic',
    marginBottom: 10,
    fontSize: 16,
  },
  registerThree: {
    marginBottom: 20,
    fontFamily: 'ABeeZee-Italic',
    fontSize: 12,
  },
  inputStyleWithout: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    marginLeft: 10,
    flex: 1,
    borderRadius: 6,
    borderColor: colors.saffron,
  },
  inputStyleOnChange: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    marginLeft: 10,
    flex: 1,
    borderRadius: 6,
    borderColor: colors.lightGrey,
  },
  countryPickerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default styles;
