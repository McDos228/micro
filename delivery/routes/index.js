const {Router} = require('express');
const {getMarketList, createOrder} = require('../service');

module.exports = Router()
    .get('/', getMarketList)
    .post('/', createOrder)