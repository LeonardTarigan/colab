const dbClient = require('../config/database');

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (username, email, password) VALUES ('${body.username}', '${body.email}', '${body.password}')`;

    return dbClient.query(SQLQuery);
}

module.exports = {
    createNewUser
}