import {Colors, Typography} from '../../../styles';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  lowerContainer: {
    marginHorizontal: 16,
  },
  backIconStyle: {
    marginTop: 30,
  },
  stateView: {
    height: 50,
    backgroundColor: Colors.PRIMARY,
    marginBottom: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  stateText: {paddingLeft: 6, fontFamily: Typography.FONT_FAMILY_SEMIBOLD},
  errMsgView: {height: 20},
  errMsg: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    textAlign: 'center',
    color: Colors.ALERT,
  },
  notErrMsg: {height: 20},
  detailsOne: {
    fontFamily: Typography.FONT_FAMILY_SEMIBOLD,
    marginVertical: 10,
    fontSize: Typography.FONT_SIZE_36,
  },
  detailsTwo: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 10,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
  },
  input: {
    height: 52,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    borderColor: Colors.PRIMARY,
    borderBottomWidth: 2,
    backgroundColor: Colors.BACKGROUND_ALT,
    paddingLeft: 6,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  gradientButton: {paddingTop: 10, alignItems: 'center'},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.GRAY_MEDIUM,
    alignItems: 'center',
    padding: 5,
  },
  label: {
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  pickerContainer: {
    ...Platform.select({
      android: {
        height: 100,
      },
      ios: {
        height: 200,
      },
    }),

    width: '100%',
    backgroundColor: 'white',
  },
});

export default styles;
