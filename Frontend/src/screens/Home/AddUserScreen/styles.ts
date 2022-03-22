import {Colors, Typography} from '../../../styles';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  headingText: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 50,
    marginBottom: 20,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
  },
  mobileNumber: {
    height: 70,
    backgroundColor: 'rgb(255,202,149)',
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
