const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    reequired: true,
    unique: true,
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
});

userSchema.virtual("friendCount").get(() => {
  return `${friends}`;
});

const User = model("user", userSchema);
