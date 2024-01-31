const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUserById,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../controllers/user-controller");

// http://localhost:300l/user
router.route("/").get(getUsers).post(createUser);

// http://localhost:300l/user/user:id
router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUserById)
  .delete(deleteUser);

// http://localhost:3001/user/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
