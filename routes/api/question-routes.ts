export {};
const router = require('express').Router();
const {
    getAllQuestions,
    createQuestion,
} = require('../../controllers/question-controller');

// route /api/questions/
router.route('/').get(getAllQuestions).post(createQuestion);

module.exports = router;