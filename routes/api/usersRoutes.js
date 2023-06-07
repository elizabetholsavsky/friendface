const router = require('express').Router();
const { 
    getAllUsers,
    // getSingleUser,
    // createUser,
    // updateUser,
    // removeUser,
    // addFriend,
    // deleteFriend
} = require('../../controllers/usersController');

/*    /api/users    */
router
    .route('/')
    .get(getAllUsers)
//     .get(getSingleUser)
//     .post(createUser)
//     .put(updateUser)
//     .delete(removeUser);

// /*    /api/users/:userId/friends/:friendId    */
// router
//     .route(':userId/friends/:friendId')
//     .post(addFriend)
//     .delete(deleteFriend);

module.exports = router;