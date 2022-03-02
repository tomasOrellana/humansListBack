const { Schema, model } = require("mongoose");

const usersSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

module.exports = model("User", usersSchema);
