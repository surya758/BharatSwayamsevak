const { Member } = require('../models');

/**
 * Create a member
 * @param {Object} memberBody
 * @returns {Promise<Member>}
 */
const createMember = async (memberBody) => {
  return Member.create(memberBody);
};

const queryMembers = async (filter, options) => {
  const members = await Member.paginate(filter, options);
  return members;
};

module.exports = {
  createMember,
  queryMembers,
};
