const express = require('express');
const router = express.Router();
const followerController = require('../../controllers/followers');

// follow a band
// /followers
router.post('/', followerController.followBand);

module.exports = router;
