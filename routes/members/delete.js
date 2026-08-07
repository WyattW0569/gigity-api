const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members')

// remove members
// /members/:id
router.delete('/:id', memberController.removeMember);

module.exports = router;