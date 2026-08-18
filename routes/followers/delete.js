const express = require('express');
const router = express.Router();
const followerController = require('../../controllers/followers');
const auth = require('../../middleware/auth');

// unfollow a band
// /followers
router.delete('/', auth, followerController.unfollowBand);

module.exports = router;
