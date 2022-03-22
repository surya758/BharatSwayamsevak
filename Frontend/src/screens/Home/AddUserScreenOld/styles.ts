import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  lowerContainer: {
    paddingTop: 20,
    marginHorizontal: 16,
  },
  backIconStyle: {
    marginTop: 30,
  },
  errMsgView: {height: 20},
  errMsg: {textAlign: 'center', color: 'red'},
  notErrMsg: {height: 20},
  addUserOne: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginVertical: 10,
    fontSize: Typography.FONT_SIZE_36,
  },
  addUserTwo: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 10,
    fontSize: Typography.FONT_SIZE_16,
  },
  header: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginTop: 15,
    marginBottom: 3,
    fontSize: Typography.FONT_SIZE_14,
  },
  inputWith: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 6,
    borderColor: Colors.PRIMARY,
    marginVertical: 10,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 6,
    borderColor: Colors.GRAY_MEDIUM,
    marginVertical: 10,
  },
  button: {
    marginTop: 30,
  },
  modal: {
    height: 50,
    borderWidth: 2,
    borderColor: Colors.GRAY_MEDIUM,
    borderRadius: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  modalText: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  gradientButton: {paddingTop: 10, alignItems: 'center'},
});

export default styles;
