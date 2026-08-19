const express = require('express');
const router = express.Router();
const venueController = require('../../controllers/venues');
const auth = require('../../middleware/auth');
const requireAdmin = require('../../middleware/requireAdmin');

router.delete('/:id', auth, requireAdmin, venueController.deleteVenue);

module.exports = router;