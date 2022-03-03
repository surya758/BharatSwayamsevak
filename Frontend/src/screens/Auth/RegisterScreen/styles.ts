import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../res/colors';

const windowWidth = Dimensions.get('window').width;

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
    fontFamily: 'OpenSans-SemiBold',
    marginVertical: 10,
    fontSize: 36,
  },
  errMsgView: {height: 16, marginBottom: 10},
  errMsg: {
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    color: colors.saffron,
    fontSize: 14,
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
  endText: {
    marginTop: 20,
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    width: windowWidth * 0.85,
    alignSelf: 'center',
  },
});

export default styles;
