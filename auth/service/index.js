const {User} = require('../models/');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const config = require('../config/index');

login = async (req, res, next) => {
    try {
        const {email, password, username} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user) throw {message : 'no user found'}
        if(bcrypt.compareSync(password, user.password)){
            let token = jwt.sign({
                userId: user.dataValues.id,
                username,
            }, config.secret, { expiresIn: '1w' })
            res.json({token})
        }      
    } catch (error) {
        next(error)
    }
}

register = async (req, res, next) => {
    try {
        const {email, password, username} = req.body;
        let pass = bcrypt.hashSync(password, salt);
        const user = await User.create({
            login : username,
            password : pass,
            email,
        });
        if (!user) throw {message :'Error while signing up'}
        res.json({login, email});
    } catch (error) {
        next(error)
    }
}

module.exports = {
    login,
    register
}