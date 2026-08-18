const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members')
const auth = require('../../middleware/auth');

// remove members
// /members/:id
router.delete('/:id', auth, memberController.removeMember);

module.exports = router;