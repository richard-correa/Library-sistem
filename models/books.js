const Sequelize = require("sequelize");

const sequelize = require("../util/db");

const books = sequelize.define("books", {
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
  year: {
    type: Sequelize.STRING,
    allowNull: true,
  },

});

module.exports = books;
