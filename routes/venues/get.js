const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');
const auth = require('../../middleware/auth');

// get all venues
// /venues
router.get('/', venueController.getAllVenues);

// get specific venue from id
// /venues/{id}
router.get('/:id', venueController.getVenueById);

// get all shows at a venue
// /venues/{id}/shows
router.get('/:id/shows', venueController.getVenueShows);

module.exports = router;