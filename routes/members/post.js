const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members')
const auth = require('../../middleware/auth');

// create members
// /members
router.post('/', auth, memberController.createMember);

module.exports = router;