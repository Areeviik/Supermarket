const { User } = require('../models/user.js')


exports.userBoard = async (req, res) => {

  const user = await User.findByPk(req.user.id, {
    attributes: ["id", "username", "email", "createdAt"]
  })

  res.json(user);
};

