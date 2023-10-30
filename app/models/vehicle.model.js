// const { connection } = require(".");

module.exports = (connection, Sequelize) => {
    const Vehicle = connection.define("vehicle",{
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        locadora:{
            type: Sequelize.STRING
        },
        modelo:{
            type: Sequelize.STRING
        },
        marca:{
            type: Sequelize.STRING
        },
        ano:{
            type: Sequelize.INTEGER
        },
        motor:{
            type: Sequelize.STRING
        },
        portas:{
            type: Sequelize.INTEGER
        },
        cambio:{
            type: Sequelize.STRING
        },
        ar_condicionado:{
            type: Sequelize.BOOLEAN
        }
    });

    return Vehicle;
}
