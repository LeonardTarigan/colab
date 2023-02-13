const usersModel = require('../models/users');
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    if(password !== confirmPassword) return res.status(400).json({message: 'The password confirmation does not match!'});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await usersModel.create({
            name: name,
            email: email,
            password: hashPassword
        })
        res.status(201).json({
            message: 'Create new user is success'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error.message);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await usersModel.findAll();
        res.status(200).json({
            message: 'Get all users is success',
            data: users
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error.message);
    }
}

module.exports = {
    createNewUser,
    getAllUsers
}