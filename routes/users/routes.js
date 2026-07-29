const express = require('express');
const router = express.Router();

const getRoutes = require('./get');
const postRoutes = require('./post');
const patchRoutes = require('./patch');

router.use('/', getRoutes);
//router.use('/', postRoutes);
//router.use('/', patchRoutes);

module.exports = router;
