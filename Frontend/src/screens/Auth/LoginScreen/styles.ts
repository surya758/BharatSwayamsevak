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
  lowerMargin: {marginTop: 10},
  errMsgView: {height: 20},
  errMsg: {
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center',
    color: colors.saffron,
  },
  notErrMsg: {height: 20},
  loginOne: {
    fontFamily: 'SourceSansPro-SemiBold',
    marginVertical: 10,
    fontSize: 36,
  },
  loginTwo: {
    fontFamily: 'SourceSansPro-SemiBold',
    marginBottom: 10,
    fontSize: 16,
  },
  eyeStyle: {position: 'absolute', zIndex: 5, right: 10, top: 20},

  inputWith: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.saffron,
    marginVertical: 10,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.lightGrey,
    marginVertical: 10,
  },
  gradientButton: {alignItems: 'center'},
});

export default styles;
