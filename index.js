const express = require('express');
const app = express();
const apiRoutes = require('./src/api/routes/api');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
  res.send('Working if changed to 3');
});

app.use(express.json());
app.use('/api/v1', apiRoutes);

module.exports = app;
