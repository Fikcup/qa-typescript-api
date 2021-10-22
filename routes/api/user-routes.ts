export {};
const router = require('express').Router();
const {
    getAllUsers
} = require('../../controllers/user-controller');

// route /api/users/
router.route('/').get(getAllUsers);

module.exports = router;