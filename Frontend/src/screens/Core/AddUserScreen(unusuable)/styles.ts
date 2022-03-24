import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    backgroundColor: Colors.GRAY_LIGHT,
  },
  headingText: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 50,
    marginBottom: 20,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fields: {
    height: 40,
    width: '100%',
    marginTop: 5,
    marginBottom: 16,
    borderBottomWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND_ALT,
    borderBottomColor: Colors.PRIMARY,
  },
  lowerContainer: {
    marginTop: 30,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  fieldText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    paddingLeft: 8,
  },
  headingStyle: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    marginRight: 5,
  },
  mobileNumber: {
    height: 70,
    backgroundColor: Colors.BACKGROUND_ALT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.PRIMARY,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  buttonContainer: {marginTop: 20, alignItems: 'center'},
});

export default styles;
