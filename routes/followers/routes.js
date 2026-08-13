const express = require('express');
const router = express.Router();
const postRoutes = require('./post');
const deleteRoutes = require('./delete');

router.use('/', postRoutes);
router.use('/', deleteRoutes);

module.exports = router;