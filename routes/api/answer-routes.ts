export {};
const router = require('express').Router();
const {
    getAllAnswers,
    getOneAnswer,
    createAnswer,
} = require('../../controllers/answer-controller');

// route /api/answers/
router.route('/').get(getAllAnswers).post(createAnswer);

// route /api/answers/:answerId
router.route('/:answerId').get(getOneAnswer);

module.exports = router;