import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  lowerContainer: {
    marginHorizontal: 10,
  },
  backIconStyle: {
    marginTop: 30,
  },
  lowerMargin: {marginTop: 10},
  errMsgView: {height: 20},
  errMsg: {textAlign: 'center', color: 'red'},
  notErrMsg: {height: 20},
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
  eyeStyle: {position: 'absolute', zIndex: 5, right: 10, top: 10},
  inputWith: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.saffron,
    marginBottom: 20,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.lightGrey,
    marginBottom: 20,
  },
});

export default styles;
