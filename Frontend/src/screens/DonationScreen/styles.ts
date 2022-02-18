import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
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
  dashViewStyle: {},
  dashLineStyle: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    width: (windowWidth * 0.75) / 2,
  },
});

export default styles;
