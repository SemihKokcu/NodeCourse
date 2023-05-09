const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '315312', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
