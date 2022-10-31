exports.check = async (req, res) => {
  console.log("Auth Chcek API is running.");
  return res.status(200).json({
    message: "Auth Check API is running",
  });
};
