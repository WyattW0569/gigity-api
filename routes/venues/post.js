const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');
const auth = require('../../middleware/auth');

// create venue
// /venues
router.post('/', auth, venueController.createVenue);

module.exports = router;
