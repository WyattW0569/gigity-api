const express = require('express');
const router = express.Router();

const usersRoutes = require('./users/routes');
const bandsRoutes = require('./bands/routes');
const venuesRoutes = require('./venues/routes');
const showsRoutes = require('./shows/routes');
const authRoutes = require('./auth/routes');

router.use('/users', usersRoutes);
router.use('/bands', bandsRoutes);
router.use('/venues', venuesRoutes);
router.use('/shows', showsRoutes);
router.use('/auth', authRoutes);

module.exports = router;
