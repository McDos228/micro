const config = require('../config');
const axios = require('axios');


isAdmin = (req, res, next) => {
    return User.findOne({where: {id: req.user.userId}})
        .then(user => {
            if (user.role !== 'admin') return res.status(400).json("You can`t visit this page!")
            return next()
        })
};

isAuth = async (req, res, next) => {
    if (!req.headers.token) return res.status(401).json("You are not authorized!");
    const user = await axios.post(`${config.authHost}/check`, {token : req.headers.token});
    req.user = user.data;
    return next();
};

module.exports = {
    isAuth,
    isAdmin
}