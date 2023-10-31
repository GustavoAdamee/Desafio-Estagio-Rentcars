const db_config = require('../config/db.config.js')

const Sequelize = require('sequelize')

const connection = new Sequelize(db_config.DB, db_config.USER, db_config.PASSWORD, {
    host: db_config.HOST,
    dialect: db_config.dialect,
    port: db_config.SERVER_PORT
})

const db = {}

db.Sequelize = Sequelize
db.connection = connection

db.vehicle = require('./vehicle.model.js')(connection, Sequelize)

module.exports = db