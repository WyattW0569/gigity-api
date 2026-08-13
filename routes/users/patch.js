const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users');
const auth = require('../../middleware/auth');

// update users pfp
// /users/update/pfp
router.patch('/update/pfp', auth, userController.updatePFP);

// update users username
// /users/update/username
router.patch('/update/username', auth, userController.updateUsername);

// update users password
// /users/update/password
router.patch('/update/password', auth, userController.updatePassword);

module.exports = router;