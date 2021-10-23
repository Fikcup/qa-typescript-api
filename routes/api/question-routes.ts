export {};
const router = require('express').Router();
const {
    getAllQuestions,
    getOneQuestion,
    createQuestion,
} = require('../../controllers/question-controller');

// route /api/questions/
router.route('/').get(getAllQuestions).post(createQuestion);

// route /api/questions/:questionId
router.route('/:questionId').get(getOneQuestion);

module.exports = router;