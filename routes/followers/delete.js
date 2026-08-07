const express = require('express');
const router = express.Router();
const followerController = require('../../controllers/followers');

// unfollow a band
// /followers
router.delete('/', followerController.unfollowBand);

module.exports = router;
