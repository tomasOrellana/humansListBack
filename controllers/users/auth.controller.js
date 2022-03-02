const { response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../../models/users");
const generateJWT = require("../../helpers/generateJWT");

const AuthController = async (req, res = response) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name });
    if (!user)
      return res
        .status(400)
        .json({ error: true, msg: "this user doesnt exist" });
    const token = await generateJWT(user.name);
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword)
      return res.status(400).json({ error: true, msg: "bad credentials" });
    res.status(200).json({
      error: false,
      msg: "auth successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, msg: "something went wrong" });
  }
};

module.exports = AuthController;
