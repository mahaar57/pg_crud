const Accounts = require("../pg/models/accounts");
const Users = require("../pg/models/users");

exports.check = async (req, res) => {
  console.log("Auth Check API is running good Yolo.");
  return res.json({
    messgae: "Auth Check API is running good indeed with speed",
  });
};

const signupUser = async (req, res) => {
  //extracting the keys from request body object
  const { email, password, name, contact } = req.body;
  // checking that whether someone with same username and password exist in the table or not
  try {
    const account = await Accounts.query().where("email", `${email}`);
    if (account.length != 0) {
      if (account[0].email == email)
        return res.status(400).json("PLayer already registered");
    }
    // if not then create the account and send info to the respective table
    const userObject = {
      email: email,
      password: password,
      users: [
        {
          name: name,
          contact: contact,
        },
      ],
    };
    const userInsert = await Accounts.query().insertGraph(userObject);
    return res.status(201).json({
      message: "Account created.",
      data: userInsert,
    });
  } catch (error) {
    console.log("In try catch", error);
  }
  // then sending response to the server
};

exports.signupUser = signupUser;
