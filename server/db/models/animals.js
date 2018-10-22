const Sequelize = require('sequelize');
const db = require('../database.js');

const Animals = db.define("animals", {
    type: {
        type: Sequelize.ENUM,
        values: ['Cat', 'Dog', 'Rabbit'],
        allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sex: {
      type: Sequelize.STRING
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaulValue:
        "Default"
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weight: {
        type: Sequelize.FLOAT
    },
    description: {
      type: Sequelize.TEXT
    }
  });

  module.exports = Animals;
  