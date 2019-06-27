const {Router} = require('express');
const {getList, create} = require('../service');

module.exports = Router()
    .get('/', getList)
    .post('/', create)