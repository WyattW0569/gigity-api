const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members')
const auth = require('../../middleware/auth');

// get all members of a band
router.get('/band/:id', memberController.getMembers);

// get all bands a user is in
router.get('/user/:id', memberController.getBandsbyMember);


module.exports = router;