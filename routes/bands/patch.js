const express = require('express');
const router = express.Router();
const bandController = require('../../controllers/bands');
const auth = require('../../middleware/auth');

// update bands pfp
// /bands/update/pfp
router.patch('/update/pfp', auth, bandController.updateBandPFP);

// update bands name
// /bands/update/name
router.patch('/update/name', auth, bandController.updateBandName);

module.exports = router;