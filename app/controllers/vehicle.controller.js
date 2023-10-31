const db = require("../models")
const Vehicle = db.vehicle
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    if(!req.body.locadora){
        res.status(400).send({
            message: "Content cannot be empty!"
        })
        return
    }

    const vehicle = {
        locadora: req.body.locadora,
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano,
        motor: req.body.motor,
        portas: req.body.portas,
        cambio: req.body.cambio,
        ar_condicionado: req.body.ar_condicionado ? req.body.ar_condicionado : false
    }

    Vehicle.create(vehicle)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vehicle."
            })
        })
}

exports.findAll = (req, res) => {
    Vehicle.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while retrieving vehicles."
            });
        })
}

exports.findOne = (req, res) => {
    id = req.params.id
    Vehicle.findByPk(id)
        .then(data => {
            if(data){
                res.send(data)
            }
            else{
                res.status(404).send({
                    message: "Vehicle not found with id=" + id
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Vehicle with id=" + id
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Vehicle.destroy({
        where: { id: id }
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Vehicle was deleted successfully!"
                })
            }
            else{
                res.send({
                    message: `Cannot delete Vehicle with id=${id}. Vehicle was not found!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vehicle with id=" + id
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id

    Vehicle.update(req.body,{
        where: { id: id }
    })
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Vehicle was updated successfully!"
                })
            }
            else{
                res.send({
                    message: `Cannot update Vehicle with id=${id}. Vehicle was not found!`
                })
            }
        })
        .catch( err => {
            res.status(500).send({
                message: "Error updating Vehicle wiith id="+ id
            })
        })
}