const { response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../../models/users");

const CreateUserController = async (req, res = response) => {
  const { name, password } = req.body;
  const salt = bcryptjs.genSaltSync();
  const user = new User({ name, password });
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({
    msg: "userCreated",
    user,
  });
};

module.exports = CreateUserController;
