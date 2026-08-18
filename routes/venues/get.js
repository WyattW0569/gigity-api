const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');
const auth = require('../../middleware/auth');

// get all venues
// /venues
router.get('/', auth, venueController.getAllVenues);

// get specific venue from id
// /venues/{id}
router.get('/:id', auth, venueController.getVenueById);

// get all shows at a venue
// /venues/{id}/shows
router.get('/:id/shows', auth, venueController.getVenueShows);

module.exports = router;