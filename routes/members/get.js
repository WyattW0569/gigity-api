const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members')

// get all members from a given band
router.get('/:id', memberController.getMembers);

// get all bands a given user is in
router.get('/:id', memberController.getBandsbyMember);

module.exports = router;