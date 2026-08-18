const express = require('express');
const router = express.Router();
const showController = require('../../controllers/shows');
const auth = require('../../middleware/auth');

// update show name
// /shows/update/name
router.patch('/update/name', auth, showController.updateShowName);

// update show date
// /shows/update/date
router.patch('/update/date', auth, showController.updateShowDate);

// update show venue
// /shows/update/venue
router.patch('/update/venue', auth, showController.updateShowVenue);

// update show ticket link
// /shows/update/ticket-link
router.patch('/update/ticket-link', auth, showController.updateShowTicketLink);

module.exports = router;
