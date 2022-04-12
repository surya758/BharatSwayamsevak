const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { memberService } = require('../services');

const createMember = catchAsync(async (req, res) => {
  const member = await memberService.createMember(req.body);
  res.status(httpStatus.CREATED).send(member);
});

const getMembers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await memberService.queryMembers(filter, options);
  res.send(result);
});

module.exports = {
  createMember,
  getMembers,
};
