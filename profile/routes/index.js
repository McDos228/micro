const {Router} = require('express');
const {get, create, update} = require('../services/');

module.exports = Router()
    .get('/', get)
    .post('/', create)
    .put('/', update)