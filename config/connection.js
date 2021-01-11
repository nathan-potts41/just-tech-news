// import Squelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();

// create a connection to database, pass in MySQL info for user and password
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;