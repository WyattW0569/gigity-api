const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users');

// get all users
// /users
router.get('/', userController.getAllUsers);

// get specific user from id
// /users/{id}
router.get('/:id', userController.getUserById);

// get specific users followed bands
// /users/{id}/followedBands
router.get('/:id/followedBands', userController.getFollowedBands);

module.exports = router;