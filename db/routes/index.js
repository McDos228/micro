const {Router} = require('express');
const auth = require('./auth');
const profile = require('./profile');

module.exports = Router()
    .use('/auth', auth)
    .use('/profile', profile)