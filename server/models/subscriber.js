const { Sequelize, db } = require("./db");

const Subscriber = db.define("subscriber", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});

module.exports = { Sequelize, db, Subscriber };
