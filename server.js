const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

const db = require('./app/models')

db.connection.sync({ force: true })
    .then(() =>{
        console.log('Drop and Resync Database with { force: true }')
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err)
    })

app.get('/', (req, res) => {
    res.send('Welcome to RENTCARS API');
})

// Routes
require('./app/routes/vehicle.routes')(app)

const PORT = process.env.APP_DOCKER_PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))