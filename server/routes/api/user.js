const express = require("express");
const router = express.Router();
const chalk = require("chalk");

const { User } = require("../../models");

router.post("/", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password) {
    res.status(400).send("Please fill out all the required fields");
    return;
  }

  const user = User.findOrCreate({
    where: {
      email: email
    },
    defaults: {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lasName,
      roleId: 1
    }
  });

  console.dir(user);
  if ()
});
