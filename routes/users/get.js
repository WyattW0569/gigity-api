const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users');
const auth = require('../../middleware/auth');

// get all users
// /users
router.get('/', auth, userController.getAllUsers);

// get currently signed in user
// /users/cur
router.get('/cur', auth, userController.getCurUserInfo);

// get specific user from id
// /users/{id}
router.get('/:id', auth, userController.getUserById);

// get specific users followed bands
// /users/{id}/followedBands
router.get('/:id/followedBands', auth, userController.getFollowedBands);

module.exports = router;