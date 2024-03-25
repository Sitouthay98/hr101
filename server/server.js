const express = require('express');
SERVER_PORT = 3000;

const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./config/database')

const { readdirSync } = require('fs')

const app = express();

connectDB();

if (!connectDB()) {
    console.log('Error connecting to database')
} else {
    console.log('Connected to database')
}

app.use(morgan('dev'));
app.use(cors());

readdirSync('./routes').map((r) => app.use('/test', require('./routes/' + r)))


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`)
})
