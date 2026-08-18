const express = require('express');
const router = express.Router();
const followerController = require('../../controllers/followers');
const auth = require('../../middleware/auth');

// follow a band
// /followers
router.post('/', auth, followerController.followBand);

module.exports = router;
