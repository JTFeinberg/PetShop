const Sequelize = require('sequelize');
const db = require('../database.js');

const Centers = db.define("centers", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    location: {
      type: Sequelize.STRING
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaulValue:
        "Default"
    },
    description: {
      type: Sequelize.TEXT
    }
  })

  module.exports = Centers;
