const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users');

// create a user
// /users
router.post('/', userController.createUser);