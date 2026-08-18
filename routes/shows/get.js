const express = require('express');
const router = express.Router();
const showController = require('../../controllers/shows');
const auth = require('../../middleware/auth');

// get all shows
// /shows
router.get('/', auth, showController.getAllShows);

// get show by id
// /shows/{id}
router.get('/:id', auth, showController.getShowById);

// get shows by date
// /shows/date/{date}
router.get('/date/:date', auth, showController.getShowsByDate);

// get lineup
// /shows/{id}/lineup
router.get('/:id/lineup', auth, showController.getLineup);

// get venue
// /shows/{id}/venue
router.get('/:id/venue', auth, showController.getVenue);

module.exports = router;
