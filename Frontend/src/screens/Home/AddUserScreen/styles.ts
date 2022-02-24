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
  errMsgView: {height: 20},
  errMsg: {textAlign: 'center', color: 'red'},
  notErrMsg: {height: 20},
  addUserOne: {
    fontFamily: 'Comfortaa-Regular',
    marginVertical: 10,
    fontSize: 36,
  },
  addUserTwo: {
    fontFamily: 'Comfortaa-Regular',
    marginBottom: 10,
    fontSize: 16,
  },
  header: {
    fontFamily: 'Roboto-Medium',
    marginTop: 15,
    marginBottom: 3,
    fontSize: 14,
  },
  inputWith: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.saffron,
    marginBottom: 16,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.lightGrey,
    marginBottom: 16,
  },
  button: {
    marginTop: 30,
  },
  modal: {
    height: 50,
    borderWidth: 2,
    borderColor: colors.lightGrey,
    borderRadius: 6,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalText: {
    fontFamily: 'SourceSansPro-SemiBold',
  },
});

export default styles;
