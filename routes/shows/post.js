const express = require('express');
const router = express.Router();
const showController = require('../../controllers/shows');

// create show
// /show
router.post('/', showController.createShow);

module.exports = router;