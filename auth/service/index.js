const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const {dbHost, secret} = require('../config/index');
const axios = require('axios');

login = async (req, res, next) => {
    try {
        const {email, password, username} = req.body;
        const {data} = await axios.post(`${dbHost}/login`, {email});
        if(!data) throw {message : 'no user found'}
        if(bcrypt.compareSync(password, data.password)){
            let token = jwt.sign({
                userId: data.id,
                username,
            }, secret, { expiresIn: '1w' })
            res.json(token)
        }   
    } catch (error) {
        next(error)
    }
}

register = async (req, res, next) => {
    try {
        const {email, password, username} = req.body;
        let pass = bcrypt.hashSync(password, salt);
        const {data} = await axios.post(`${dbHost}/register`, {login : username,  password : pass, email});
        console.log(data)
        if (!data) throw {message :'Error while signing up'}
        res.json({login, email});
    } catch (error) {
        next(error)
    }
}

checkToken = (req, res, next) =>{
    try {
        jwt.verify(req.body.token, secret, (err, decode) => {
            if(err) throw err
            res.json(decode)
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    login,
    register,
    checkToken
}