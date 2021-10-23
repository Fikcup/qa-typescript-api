export {};
const router = require('express').Router();
const {
    getAllQuestions,
} = require('../../controllers/question-controller');

// route /api/questions/
router.route('/').get(getAllQuestions);

module.exports = router;