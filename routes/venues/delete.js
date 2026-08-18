const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');
const auth = require('../../middleware/auth');

router.delete('/:id', auth, venueController.deleteVenue);

module.exports = router;