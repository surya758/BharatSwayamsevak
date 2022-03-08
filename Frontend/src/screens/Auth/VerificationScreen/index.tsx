import {
  Animated,
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import React, {useEffect, useState} from 'react';
import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStackParamList} from '../../../navigation/AuthNav';
import {Colors} from '../../../styles';
import GradientButtonComponent from '../../../components/GradientButton';
import Icon from 'react-native-vector-icons/AntDesign';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

type Animate = {
  hasValue: boolean;
  index: any;
  isFocused: any;
  symbol?: any;
};

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  'verification'
>;

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 4;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell: React.FC<Animate> = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const VerificationScreen = () => {
  const navigation = useNavigation<authScreenNavigationType>();
  const [value, setValue] = useState<string>('');
  const [showResend, setShowResend] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isPressable, setIsPressable] = useState<boolean>(false);
  const [number, setNumber] = useState('');

  useEffect(() => {
    getNumberFunc();
  }, []);

  const getNumberFunc = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@tempUserData');
      return jsonValue != null ? setNumber(JSON.parse(jsonValue).number) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const showErrMsg = (mes: string) => {
    setMessage(mes);
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  const pressedResend = () => {
    setIsPressable(false);
    setTimeout(() => {
      setShowResend(true);
      setIsPressable(true);
    }, 20000);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowResend(true);
      setIsPressable(true);
    }, 5000);
  }, []);

  const otpHandler = async () => {
    // checks
    value.length < 4
      ? showErrMsg('Fields are currently empty!')
      : !/^[0-9]*$/.test(value)
      ? showErrMsg('No special characters or alphabets allowed!')
      : null;

    //get data from tempUserData
    try {
      const tempData = await AsyncStorage.getItem('@tempUserData');
      if (tempData != null) {
        const newTempData = {...JSON.parse(tempData), otp: value};
        await AsyncStorage.setItem(
          '@tempUserData',
          JSON.stringify(newTempData),
        );
      }
    } catch (e) {
      // error reading value
    }

    //navigate
    navigation.navigate('password');

    // do a request to backend server
  };

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell: React.FC<Animate> = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.upperContainer}>
        <View style={styles.lowerContainer}>
          <Icon
            name="back"
            size={30}
            color={Colors.ALERT}
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.verificationOne}>Verification</Text>
          <Text style={styles.verificationTwo}>
            Enter the 4 digit code sent on
          </Text>
          <View style={styles.headingView}>
            <Text style={styles.verificationThree}>{number}</Text>
            {showResend ? (
              <TouchableOpacity
                disabled={isPressable ? false : true}
                onPress={pressedResend}>
                <Text
                  style={{
                    ...styles.resendText,
                    color: isPressable ? Colors.ALERT : Colors.GRAY_DARK,
                  }}>
                  RESEND
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
          {message ? (
            <View style={styles.errMsgView}>
              <Text style={styles.errMsg}>{message}</Text>
            </View>
          ) : (
            <View style={styles.notErrMsg} />
          )}
          <CodeField
            ref={ref}
            {...props}
            value={value}
            autoFocus={true}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
          <View style={styles.verifyButton}>
            <GradientButtonComponent text="Verify" onPress={otpHandler} />
          </View>
          {!isPressable ? (
            showResend ? (
              <Text style={styles.resendWarningText}>
                You can resend after twenty seconds. Please wait.
              </Text>
            ) : null
          ) : null}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default VerificationScreen;
