export {};
const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createUser,
} = require('../../controllers/user-controller');

// route /api/users/
router.route('/').get(getAllUsers).post(createUser);

// route /api/user/:userId
router.route('/:userId').get(getOneUser);

module.exports = router;