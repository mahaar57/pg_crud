const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const auth = require("./routes/auth");
const cors = require("cors");
const { dbConnection } = require("./pg/dbconfig");
const { boolean } = require("joi");
dotenv.config();

app.use(cors());
app.use(express.json());
app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", auth);

const PORT = process.env.AUTH_PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Listening to port${PORT}`);
});
