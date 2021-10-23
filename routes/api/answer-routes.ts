export {};
const router = require('express').Router();
const {
    getAllAnswers,
    createAnswer,
} = require('../../controllers/answer-controller');

// route /api/answers/
router.route('/').get(getAllAnswers).post(createAnswer);

module.exports = router;