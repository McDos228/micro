const {Router} = require('express');
const {login, register} = require('../service');

module.exports = Router()
    .post('/login', login)
    .post('/register', register)
    .post('/check', checkToken)