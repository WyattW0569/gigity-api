const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members')

// remove members
router.get('/id', memberController.removeMembers);

module.exports = router;