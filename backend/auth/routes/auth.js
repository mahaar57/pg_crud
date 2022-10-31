const app = require("express");
const router = app.Router();

const authController = require("../controller/authController");

router.get("/check", authController.check);

module.exports = router;
