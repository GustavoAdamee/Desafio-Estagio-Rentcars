module.exports = app => {
    const vehicle = require("../controllers/vehicle.controller.js")
    var router = require("express").Router()

    router.post("/", vehicle.create)

    router.get("/", vehicle.findAll)

    router.get("/:id", vehicle.findOne)

    router.delete("/:id", vehicle.delete)

    router.put("/:id", vehicle.update)

    app.use('/api/vehicles', router)
}