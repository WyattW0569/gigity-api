const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');
const auth = require('../../middleware/auth');
const requireAdmin = require('../../middleware/requireAdmin');

// update venue name
// /venues/update/name
router.patch('/update/name', auth, requireAdmin, venueController.updateVenueName);

// update venue booking link
// /venues/update/booking_link
router.patch('/update/booking_link', auth, requireAdmin, venueController.updateVenueBookingLink);

module.exports = router;
