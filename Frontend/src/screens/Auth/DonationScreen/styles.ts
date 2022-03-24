import {Colors, Typography} from '../../../styles';
import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  upperContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  eyeStyle: {position: 'absolute', zIndex: 5, left: 24, top: 16},

  errMsgView: {height: 20},
  errMsg: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    textAlign: 'center',
    color: Colors.ALERT,
  },
  notErrMsg: {height: 20},
  lowerContainer: {
    marginHorizontal: 10,
  },
  backIconStyle: {
    marginTop: 30,
  },
  donationOne: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginVertical: 10,
    fontSize: Typography.FONT_SIZE_36,
  },
  donationTwo: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 10,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
  },
  donationButtonStyle: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  dashViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  dashLineStyle: {
    overflow: 'hidden',
    margin: 10,
    width: (windowWidth * 0.78) / 2,
  },
  gradientDonationButtonView: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    height: 52,
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    borderColor: Colors.PRIMARY,
    borderBottomWidth: 2,
    backgroundColor: Colors.BACKGROUND_ALT,
    paddingLeft: 30,
    fontSize: 14,
    marginHorizontal: 10,
  },
});

export default styles;
