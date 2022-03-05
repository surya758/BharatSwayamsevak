const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { snsService } = require('../services');

const sendOtp = catchAsync(async (req, res) => {
  const response = await snsService.sendOtp(req.body.phoneNumber);
  res.status(httpStatus.ACCEPTED).send(response);
});

const verifyOtp = catchAsync(async (req, res) => {
  const response = await snsService.verifyOtp(req.body.phoneNumber, req.body.otp);
  res.status(httpStatus.ACCEPTED).send(response);
});

module.exports = {
  sendOtp,
  verifyOtp,
};
