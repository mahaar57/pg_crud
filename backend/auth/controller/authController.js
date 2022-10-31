exports.check = async (req, res) => {
  console.log("Auth Check API is running good Yolo.");
  return res.json({
    messgae: "Auth Check API is running good indeed with speed",
  });
};
