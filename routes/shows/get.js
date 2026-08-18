const express = require('express');
const router = express.Router();
const showController = require('../../controllers/shows');
const auth = require('../../middleware/auth');

// get all shows
// /shows
router.get('/', showController.getAllShows);

// get show by id
// /shows/{id}
router.get('/:id', showController.getShowById);

// get shows by date
// /shows/date/{date}
router.get('/date/:date', showController.getShowsByDate);

// get lineup
// /shows/{id}/lineup
router.get('/:id/lineup', showController.getLineup);

// get venue
// /shows/{id}/venue
router.get('/:id/venue', showController.getVenue);

module.exports = router;
