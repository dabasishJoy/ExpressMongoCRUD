const bcrypt = require("bcrypt");

exports.CreateUser = (req, res, next) => {
  let newUser;

  const hashedPasswordd = bcrypt.hash(req.body.password);

  next();
};
