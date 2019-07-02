const {Router} = require('express');
const {create, update} = require('../../dao/template');
const {login, register} = require('../../services/auth');

module.exports = Router()
    .post('/test', async (req, res, next)=>{
        const user = await update(req.body)
        res.json(user)
    })

    .post('/register', register)

    .post('/login', login)