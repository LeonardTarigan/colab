const usersModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
};

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
};

const userLogin = async (req, res) => {
    try {
        const user = await usersModel.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({message: 'Wrong password'});
        const userId = user[0].id;
        const userName = user[0].name;
        const userEmail = user[0].email;
        const accessToken = jwt.sign({userId, userName, userEmail}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, userName, userEmail}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await usersModel.update({refresh_token: refreshToken}, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, //milisecond
            secure: true
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({message: 'Could not find the email!'});
    }
}

module.exports = {
    createNewUser,
    getAllUsers,
    userLogin
};