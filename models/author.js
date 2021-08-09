const Sequelize = require("sequelize");

const sequelize = require("../util/db");

const Authors = sequelize.define("authors", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Authors;
