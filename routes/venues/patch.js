const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');

// update venue name
// /venues/update/name
router.patch('/update/name', venueController.updateVenueName);

// update venue booking link
// /venues/update/booking_link
router.patch('/update/booking_link', venueController.updateVenueBookingLink);

module.exports = router;
