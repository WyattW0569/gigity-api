const express = require('express');
const router = express.Router();
const bandController = require('../../controllers/bands');

router.delete('/:id', bandController.deleteBand);

module.exports = router;