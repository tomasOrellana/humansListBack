const { Router } = require("express");
const CreateHuman = require("../controllers/humans/createHuman.controller.js");
const DeleteHuman = require("../controllers/humans/deleteHuman.controller.js");
const AuthController = require("../controllers/humans/getAll.controller.js");
const validarJWT = require("../middlewares/checkJWT");

const router = Router();

router.get("/getAll", [validarJWT], AuthController);
router.post("/createHuman", [validarJWT], CreateHuman);
router.post("/deleteHuman", [validarJWT], DeleteHuman);

module.exports = router;
