export {};
const router = require('express').Router();
const {
    getAllQuestions,
    getOneQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion,
} = require('../../controllers/question-controller');

// route /api/questions/
router.route('/').get(getAllQuestions).post(createQuestion);

// route /api/questions/:questionId
router.route('/:questionId').get(getOneQuestion).put(updateQuestion).delete(deleteQuestion);

module.exports = router;