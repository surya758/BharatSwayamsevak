import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  lowerContainer: {
    marginHorizontal: 16,
  },
  backIconStyle: {
    marginTop: 30,
  },
  registerOne: {
    fontFamily: 'SourceSansPro-SemiBold',
    marginVertical: 10,
    fontSize: 36,
  },
  errMsgView: {height: 16, marginBottom: 10},
  errMsg: {
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center',
    color: colors.saffron,
  },
  notErrMsg: {height: 16, marginBottom: 10},
  registerTwo: {
    marginBottom: 10,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
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
  gradientButton: {alignItems: 'center'},
});

export default styles;
