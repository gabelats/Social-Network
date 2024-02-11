const { User } = require("../models");

const userController = {
  //get all users
  async getUsers(req, res) {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //get a single user by id
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      console.log("here");
      const userData = await User.create(req.body);

      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUserById(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json({ message: "user was deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //add a friend
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.parama.userId },
        { $addToSet: { friends: req.body.friendId || req.params.friendId } },
        { new: true }
      );
      if (!friend) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //remove a friend
  async removeFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $pull: { friends: params.friendId } },
        { new: true }
      );
      if (!friend) {
        return res.status(404).json({ message: "No friend with that ID" });
      }
      res.status(200).json("Friend was removed!!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = userController;
