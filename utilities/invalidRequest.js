exports.invalidId = (res) => {
  res.status(500).json({
    message: "Invalid Request",
  });
};
