const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users');
const auth = require('../../middleware/auth');

// get all users
// /users
router.get('/', userController.getAllUsers);

// get currently signed in user
// /users/cur
router.get('/cur', auth, userController.getCurUserInfo);

// get current users followed bands
// /users/cur/followedBands
router.get('/cur/followedBands', auth, userController.getCurFollowedBands);

// get specific user from id
// /users/{id}
router.get('/:id', userController.getUserById);

// get specific users followed bands
// /users/{id}/followedBands
router.get('/:id/followedBands', userController.getFollowedBands);

module.exports = router;