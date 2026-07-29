const express = require('express');
const router = express.Router();
const bandController = require('../../controllers/bands');

// update bands pfp
// /bands/update/pfp
router.patch('/update/pfp', bandController.updateBandPFP);

// update bands name
// /bands/update/name
router.patch('/update/name', bandController.updateBandName);

module.exports = router;