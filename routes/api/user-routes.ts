export {};
const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller');

// route /api/users/
router.route('/').get(getAllUsers).post(createUser);

// route /api/user/:userId/
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;