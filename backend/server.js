const express = require('express');
const db = require('./db');
require('dotenv').config({path: './.env'});
const cors = require('cors');

const app = express();

//We need this to avoid the CORS error on certain browsers
app.use(cors());
// Define routes
app.use('/api/routes', require('./routes/hello'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
