const express = require('express');

const userController = require('../../controllers/user.controller');

const router = express.Router();

router.route('/').post(userController.usersReferred);

module.exports = router;
