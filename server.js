const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to RENTCARS API');
});

const db = require('./app/models');

db.connection.sync({ force: true })
.then(() =>{
    console.log('Drop and Resync Database with { force: true }');
})
.catch((err) => {
    console.log("Failed to sync db: " + err);
});


const PORT = process.env.SERVER_PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));