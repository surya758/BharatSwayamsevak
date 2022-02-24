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
  errMsgView: {height: 16, marginVertical: 10},
  errMsg: {textAlign: 'center', color: 'red'},
  notErrMsg: {height: 16, marginVertical: 10},
  detailsOne: {
    fontFamily: 'Comfortaa-Regular',
    marginVertical: 10,
    fontSize: 36,
  },
  detailsTwo: {
    fontFamily: 'Comfortaa-Regular',
    marginBottom: 10,
    fontSize: 16,
  },
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
