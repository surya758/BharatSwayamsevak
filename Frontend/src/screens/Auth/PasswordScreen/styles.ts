import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

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
  errMsg: {textAlign: 'center', color: 'red', marginBottom: 20},
  notErrMsg: {marginBottom: 20},
  eyeStyle: {position: 'absolute', zIndex: 5, right: 10, top: 10},
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
    borderColor: Colors.PRIMARY,
    marginBottom: 20,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: Colors.GRAY_MEDIUM,
    marginBottom: 20,
  },
  gradientButton: {alignItems: 'center'},
});

export default styles;
