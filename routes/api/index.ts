export {};
const router = require('express').Router();
const userRoutes = require('./user-routes');
const questionRoutes = require('./question-routes');

// route /api/users/
router.use('/users', userRoutes);

// route /api/questions/
router.use('/questions', questionRoutes);

module.exports = router;