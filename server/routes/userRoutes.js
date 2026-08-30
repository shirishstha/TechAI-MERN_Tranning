const express = require('express');
const { createUser, getUser } = require('../controller/userController');
const router = express.Router();

router.post('/register',createUser);
router.post('/login',getUser)

module.exports = router