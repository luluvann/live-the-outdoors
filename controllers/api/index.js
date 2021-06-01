const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const trailRoutes = require('./trails-routes');

router.use('/users', userRoutes);
router.use('/trail', trailRoutes);

module.exports = router;
