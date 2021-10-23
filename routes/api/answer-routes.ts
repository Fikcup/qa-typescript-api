export {};
const router = require('express').Router();
const {
    getAllAnswers,
} = require('../../controllers/answer-controller');

// route /api/answers/
router.route('/').get(getAllAnswers);

module.exports = router;