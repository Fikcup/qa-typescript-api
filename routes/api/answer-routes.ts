export {};
const router = require('express').Router();
const {
    getAllAnswers,
    getOneAnswer,
    createAnswer,
    updateAnswer,
    deleteAnswer,
} = require('../../controllers/answer-controller');

// route /api/answers/
router.route('/').get(getAllAnswers).post(createAnswer);

// route /api/answers/:answerId
router.route('/:answerId').get(getOneAnswer).put(updateAnswer).delete(deleteAnswer);

module.exports = router;