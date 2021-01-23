const express = require('express');
const db = require('./db');
require('dotenv').config({ path: './.env' });
const cors = require('cors');

const app = express();

// Define routes
app.use(cors());
app.use('/api/routes', require('./routes/hello'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
