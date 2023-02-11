const usersModel = require('../models/users');

const createNewUser = async (req, res) => {
    const { body } = req;

    try {
        await usersModel.createNewUser(body)
        res.status(201).json({
            message: 'Create new user is success',
            data: body
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error.message);
    }
}

module.exports = {
    createNewUser
}