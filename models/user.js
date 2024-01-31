const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
      },
    },
  },
  thoughts: [thoughtSchema],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  toJson: {
    virtuals: true,
  },
  id: false,
});

userSchema.virtual("friendCount").get(() => {
  return this.friends.length;
});

const User = model("user", userSchema);
module.exports = User;
