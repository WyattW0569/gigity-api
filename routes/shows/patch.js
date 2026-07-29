const express = require('express');
const router = express.Router();
const showController = require('../../controllers/shows');

// update show name
// /shows/update/name
router.patch('/update/name', showController.updateShowName);

// update show date
// /shows/update/date
router.patch('/update/date', showController.updateShowDate);

// update show venue
// /shows/update/venue
router.patch('/update/venue', showController.updateShowVenue);

// update show ticket link
// /shows/update/ticket-link
router.patch('/update/ticket-link', showController.updateShowTicketLink);

module.exports = router;
