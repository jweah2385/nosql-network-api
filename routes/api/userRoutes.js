const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  getUserFriends,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// router.route('/:userId').get(getUsers).post(addFriend)
// router.route('/:userId').get(getSingleUser);
// router.route('/:userId').get(getUsers).put(updateUser);
// router.route('/:userId').get(getUsers).delete(deleteUser);
// /api/users/:userId
// router.route('/:userId')
//   .get(getSingleUser) 
//   .put(updateUser)   
//   .delete(deleteUser);

// router.route('/:userId/friends/friendId').post(addFriend)


// /api/users/:userId
router.route('/:userId')
  .get(getSingleUser)  // Get a single user
  .put(updateUser)     // Update a user
  .delete(deleteUser); // Delete a user

router.route('/:userId/friends').get(getUserFriends);


// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend); // Add a friend



module.exports = router;

