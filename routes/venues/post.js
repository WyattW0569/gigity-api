const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');
const auth = require('../../middleware/auth');
const requireAdmin = require('../../middleware/requireAdmin');

// create venue
// /venues
router.post('/', auth, requireAdmin, venueController.createVenue);

module.exports = router;
