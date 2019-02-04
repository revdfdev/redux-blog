const { Sequelize, db } = require("./db");

const Permission = db.define("permission", {
  name: {
    type: Sequelize.TEXT,
    unique: false
  }
});

module.exports = { Sequelize, db, Permission };
