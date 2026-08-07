const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members')

// create members
// /members
router.post('/', memberController.createMember);

module.exports = router;