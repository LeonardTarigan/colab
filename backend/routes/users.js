const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const { verifyToken } = require('../middleware/verifyToken');
const { refreshToken } = require('../controllers/refreshToken');

router.post('/users', usersController.createNewUser);
router.get('/users', verifyToken, usersController.getAllUsers);
router.post('/login', usersController.userLogin);
router.get('/token', refreshToken);

module.exports = router;