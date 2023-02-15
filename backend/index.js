const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./config/database');
const cookieParser = require('cookie-parser');

const usersRoutes = require('./routes/users');

//Middleware
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/', usersRoutes);

//Database
const dbConnect = async () => {
    try {
        await db.authenticate();
        console.log('Database connected....');
        // await User.sync();
    } catch (error) {
        console.error(error);
    }
};
dbConnect();

//Listening to server connection
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));