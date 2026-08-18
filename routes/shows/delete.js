const express = require('express');
const router = express.Router();
const showController = require('../../controllers/shows');
const auth = require('../../middleware/auth');

router.delete('/:id', auth, showController.deleteShow);
router.delete('/:show_id/:band_id', auth, showController.deleteLineupEntry);

module.exports = router;