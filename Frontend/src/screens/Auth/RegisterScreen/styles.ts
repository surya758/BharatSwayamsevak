import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  lowerContainer: {
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
  errMsgView: {height: 16, marginBottom: 10},
  errMsg: {textAlign: 'center', color: 'red'},
  notErrMsg: {height: 16, marginBottom: 10},
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
