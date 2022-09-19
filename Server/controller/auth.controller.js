const config = require("../config/auth.config");
const { User, Cart } = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");

const app = express();
app.use(express.json());

const signup = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    await Cart.create({userId: user.id})

    signin(req, res)
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 186400,
    });

    res.status(200).json({
      token,
      id: user.id,
      username: user.username,
      email: user.email, 
    })
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!",
    });
  } catch (err) {
    this.next(err);
  }
};

module.exports = {
  signup,
  signin,
  signout
}