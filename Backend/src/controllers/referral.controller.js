const catchAsync = require('../utils/catchAsync');
const { referralService } = require('../services');

const usersReferred = catchAsync(async (req, res) => {
  const users = await referralService.getUsersByParticularReferrer(req.body.referralCode);
  res.send(users);
});

module.exports = {
  usersReferred,
};
