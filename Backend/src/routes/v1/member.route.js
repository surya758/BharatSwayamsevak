const express = require('express');
const memberController = require('../../controllers/member.controller');

const router = express.Router();

router.post('/', memberController.createMember).get('/', memberController.getMembers);

module.exports = router;
