export {};
const router = require('express').Router();
const userRoutes = require('./user-routes');
const questionRoutes = require('./question-routes');
const answerRoutes = require('./answer-routes');

// route /api/users/
router.use('/users', userRoutes);

// route /api/questions/
router.use('/questions', questionRoutes);

// route/answers/
router.use('/answers', answerRoutes);

module.exports = router;