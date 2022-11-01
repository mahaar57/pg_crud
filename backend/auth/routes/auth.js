const app = require("express");
const { func } = require("joi");
const router = app.Router();

const authController = require("../controller/authController");

router.get("/check", authController.check);
router.post("/signup", authController.signupUser);

module.exports = router;
