const express = require('express');

const referralController = require('../../controllers/referral.controller');

const router = express.Router();

router.route('/').post(referralController.usersReferred);

module.exports = router;
