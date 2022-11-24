const sequelize = require('sequelize')
require('dotenv').config()

const database = new sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASS, {
    dialect: 'mssql',
    host: 'localhost',
    port:1433
});

database.sync();

module.exports = database;
