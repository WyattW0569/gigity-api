const express = require('express');
const router = express.Router();
const showController = require('../../controllers/shows');

router.delete('/:id', showController.deleteShow);
router.delete('/:show_id/:band_id', showController.deleteLineupEntry);

module.exports = router;