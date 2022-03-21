const { User } = require('../models');

const getUsersByParticularReferrer = async (referralCode) => {
  const users = await User.find({ referrer: referralCode }, { name: 1, phoneNumber: 1, referrer: 1 });
  return users;
};

const referralCodeQuery = async (referrerCode) => {
  const user = await User.findOne({ referralCode: referrerCode });
  if (user) {
    return true;
  }
  return false;
};

module.exports = {
  getUsersByParticularReferrer,
  referralCodeQuery,
};
