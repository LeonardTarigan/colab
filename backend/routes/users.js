const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.post('/users', usersController.createNewUser);
router.get('/users', usersController.getAllUsers);
router.post('/login', usersController.userLogin);

module.exports = router;