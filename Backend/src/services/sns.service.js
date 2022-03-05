const AWS = require('aws-sdk');
const httpStatus = require('http-status');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');
const VERIFICATION_CODES = require('../utils/dataOTP');

const generateOTPcode = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// AWS SNS Config
AWS.config.update({
  accessKeyId: config.sns.accessKey,
  secretAccessKey: config.sns.secretKey,
  region: config.sns.region,
});

// Intialise the config
const sns = new AWS.SNS();

// sending OTP
const sendOtp = async (phoneNumber) => {
  const OTP = generateOTPcode(1000, 9999);
  VERIFICATION_CODES.push(`${OTP}`);

  try {
    const params1 = {
      Protocol: 'sms',
      TopicArn: 'arn:aws:sns:ap-south-1:244829182662:BSSTopic',
      Endpoint: phoneNumber,
    };

    const params2 = {
      Message: `Your 4 digit OTP for Bharat Swayamsevak is ${OTP}`,
      PhoneNumber: phoneNumber,
    };

    sns.subscribe(params1, function (err, data) {
      if (err) throw new Error(err, err.stack);
      else return data;
    });

    sns.publish(params2, function (err, data) {
      if (err) throw new Error(err, err.stack);
      else return data; // successful response
    });
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something went wrong.');
  }
};

// verifying OTP
const verifyOtp = async (phoneNumber, OTP) => {
  if (VERIFICATION_CODES.pop() === OTP) {
    return { data: 'Successfully verified' };
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
};
