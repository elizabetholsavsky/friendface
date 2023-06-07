const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const thoughtRoutes = require('./thoughtsRoutes');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
