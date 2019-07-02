const {Market, Order} = require('../models');
const axios = require('axios');

getMarketList = async (req, res, next) => {
    try {
        res.json(await Market.findAll())
    } catch (error) {
        next(error)
    }
}

getMenuList = async (req, res, next) => {
    try {
        // const menu
        res.json('menu')
    } catch (error) {
        next(error)
    }
}

createOrder = async (req, res, next) =>{
    try {

        const {order, filling, addition, notes, size, quantity, marketId} = req.body;

        const order = await Order.create({
            date : Date.now(),
            order,
            filling,
            addition : JSON.stringify(addition),
            notes,
            size,
            quantity,
            marketId,
            userId : req.user.userId
        })

        res.json(order)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getMarketList,
    createOrder
}