const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to RENTCARS API');
});

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));