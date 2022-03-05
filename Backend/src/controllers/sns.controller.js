const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { snsService } = require('../services');

const sendOtp = catchAsync(async (req, res) => {
  console.log(req.body.phoneNumber);
  const messageId = await snsService.sendOtp(req.body.phoneNumber);
  res.status(httpStatus.ACCEPTED).send(messageId);
});

const verifyOtp = catchAsync(async (req, res) => {
  await snsService.verifyOtp(req.body.phoneNumber, req.body.otp);
  res.status(httpStatus.OK).send();
});

module.exports = {
  sendOtp,
  verifyOtp,
};
