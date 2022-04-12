const httpStatus = require('http-status');
const { Member } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createMember = async (memberBody) => {
  return Member.create(memberBody);
};

module.exports = {
  createMember,
};
