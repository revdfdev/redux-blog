const express = require("express");
const router = express.Router();
const chalk = require("chalk");

const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const user = User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user && user.validatePassword(req.body.password)) {
      req.session.user = user.dataValues;
      delete req.session.user.password;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(chalk.red(error));
  }
});

module.exports = router;
