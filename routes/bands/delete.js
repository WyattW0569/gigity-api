const express = require('express');
const router = express.Router();
const bandController = require('../../controllers/bands');
const auth = require('../../middleware/auth');

router.delete('/:id', auth, bandController.deleteBand);

module.exports = router;