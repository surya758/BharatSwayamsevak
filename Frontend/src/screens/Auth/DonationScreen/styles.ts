import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../res/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
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
  donationOne: {
    fontFamily: 'Comfortaa-Regular',
    marginVertical: 10,
    fontSize: 36,
  },
  donationTwo: {
    fontFamily: 'Comfortaa-Regular',
    marginBottom: 20,
    fontSize: 16,
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
  },
  dashLineStyle: {
    overflow: 'hidden',
    margin: 10,
    width: (windowWidth * 0.75) / 2,
  },
  gradientDonationButtonView: {
    alignItems: 'center',
  },
  inputWith: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.saffron,
    marginBottom: 20,
    margin: 10,
  },
  inputWithout: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: colors.lightGrey,
    marginBottom: 20,
    margin: 10,
  },
});

export default styles;
