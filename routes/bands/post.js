const express = require('express');
const router = express.Router();
const bandController = require('../../controllers/bands');

// create new band
// /bands
router.post('/', bandController.createBand);

module.exports = router;