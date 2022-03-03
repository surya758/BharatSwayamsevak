const { User } = require('../models');

const getUsersByParticularReferrer = async (referralCode) => {
  const users = await User.find({ referrer: referralCode }, { name: 1, email: 1, referrer: 1 });
  return users;
};

module.exports = {
  getUsersByParticularReferrer,
};
