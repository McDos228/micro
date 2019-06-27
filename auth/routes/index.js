const {Router} = require('express');
const {login, register} = require('../service');

module.exports = Router()
    .get('/', (req, res)=>res.json('hello'))
    .post('/login', login)
    .post('/register', register)
    .post('/check', checkToken)