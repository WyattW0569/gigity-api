const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members')

// create members
router.get('/', memberController.createMembers);

module.exports = router;