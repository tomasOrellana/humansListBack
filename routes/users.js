const { Router } = require("express");
const { check } = require("express-validator");
const { checks } = require("../middlewares/checks");

const AuthController = require("../controllers/users/auth.controller.js");
const CreateUserController = require("../controllers/users/createUser.controller.js");

const router = Router();

router.post(
  "/auth",
  [
    check("name", "name is required").isString(),
    check("password", "password is required").isString(),
    checks,
  ],
  AuthController
);
router.post("/createUser", CreateUserController);

module.exports = router;
