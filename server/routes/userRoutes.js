const express = require('express');
const { createUser, getUser } = require('../controller/userController');
const router = express.Router();

router.post('/register',createUser);
router.get('/login',getUser)

module.exports = router