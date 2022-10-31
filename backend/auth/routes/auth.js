const app = require("express");
const router = app.Router();

const authController = require("../controller/authController");

router.get("/check", function (req, res) {
  console.log("Fuck u");
  return res.status(200).message("Fuck u again");
});
