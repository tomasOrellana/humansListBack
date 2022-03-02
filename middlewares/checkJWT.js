const jwt = require("jsonwebtoken");
const { response } = require("express");

const validarJWT = (req, res = response, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      msg: "No token",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRET_KEY);
    req.uid = uid;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "No valid token",
    });
  }
};

module.exports = validarJWT;
