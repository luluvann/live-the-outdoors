const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const traiRoutes = require('./trails-routes');

router.use('/users', userRoutes);
router.use('/trail', traiRoutes);

module.exports = router;