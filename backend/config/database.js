const { Client } = require('pg');
require('dotenv').config();

const dbClient = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

dbClient.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Database connected....')
    }
})

module.exports = dbClient;