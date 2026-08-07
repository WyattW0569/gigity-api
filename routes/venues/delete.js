const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');

router.delete('/:id', venueController.deleteVenue);

module.exports = router;