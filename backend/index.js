const express = require('express')
const app = express();
require('dotenv').config();

const usersRoutes = require('./routes/users');

//Middleware
app.use(express.json());

//Routes
app.use('/users', usersRoutes);

//Listening to server connection
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));