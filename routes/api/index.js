const router = require('express').Router();
// const appRoutes = require('./appRoutes');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
// router.use('/apps', appRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
module.exports = router;


