const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users');

// update users pfp
// /users/update/pfp
router.patch('/update/pfp', userController.updatePFP);

// update users username
// /users/update/username
router.patch('/update/username', userController.updateUsername);

// update users password
// /users/update/password
router.patch('/update/password', userController.updatePassword);

module.exports = router;
