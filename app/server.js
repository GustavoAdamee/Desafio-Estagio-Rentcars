require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'http://localhost:3001',
    methods: 'GET,PUT,POST,DELETE', 
    credentials: true, 
  }));

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const db = require('./models')

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
require('./routes/vehicle.routes')(app)

const PORT = process.env.APP_DOCKER_PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))