const express = require('express');
const router = express.Router();
const bandController = require('../../controllers/bands');
const auth = require('../../middleware/auth');

// create new band
// /bands
router.post('/', auth, bandController.createBand);

module.exports = router;