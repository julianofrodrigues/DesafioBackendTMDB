require('dotenv').config(); // Configurar .env
const cors = require('cors');
const express = require('express');
require('./database/connection').connect();
const moviesRoutes = require('./routes/movies.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(moviesRoutes);

app.listen(3333, () => {
  console.log('Server running');
});
