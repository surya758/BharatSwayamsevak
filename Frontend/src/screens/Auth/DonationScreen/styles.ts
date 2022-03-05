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
    alignItems: 'center',
  },
  inputWith: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 6,
    borderColor: Colors.PRIMARY,
    marginBottom: 20,
    margin: 10,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 6,
    borderColor: Colors.GRAY_MEDIUM,
    marginBottom: 20,
    margin: 10,
  },
});

export default styles;
