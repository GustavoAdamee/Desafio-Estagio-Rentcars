// const { connection } = require(".");

module.exports = (connection, Sequelize) => {
    const Vehicle = connection.define("vehicle",{
        id: {},
        locadora:{},
        modelo:{},
        marca:{},
        ano:{},
        motor:{},
        portas:{},
        cambio:{},
        ar_condicionado:{},
        updated_at:{},
        created_at:{}
    });

    return Vehicle;
}
