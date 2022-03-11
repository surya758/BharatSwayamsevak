const catchAsync = require('../utils/catchAsync');
const { referralService } = require('../services');

const usersReferred = catchAsync(async (req, res) => {
  const users = await referralService.getUsersByParticularReferrer(req.body.referralCode);
  res.send(users);
});

const doesReferralExist = catchAsync(async (req, res) => {
  const isReferralViable = await referralService.referralCodeQuery(req.query.referrerCode);
  res.send(isReferralViable);
});

module.exports = {
  usersReferred,
  doesReferralExist,
};
