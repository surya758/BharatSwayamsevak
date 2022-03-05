const AWS = require('aws-sdk');
const httpStatus = require('http-status');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');

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
  try {
    const params = {
      PhoneNumber: phoneNumber,
    };
    sns.createSMSSandboxPhoneNumber(params, function (err, data) {
      if (err) throw new Error(err, err.stack);
      return data;
    });
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something went wrong.');
  }
};

// verifying OTP
const verifyOtp = async (phoneNumber, otp) => {
  try {
    const params = {
      OneTimePassword: otp,
      PhoneNumber: phoneNumber,
    };
    sns.verifySMSSandboxPhoneNumber(params, function (err, data) {
      if (err) throw new Error(err, err.stack);
      return data;
    });
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Verification failed.');
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
};
