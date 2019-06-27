const {Market} = require('../models');

getList = async (req, res, next) => {
    try {
        res.json(await Market.findAll())
    } catch (error) {
        next(error)
    }
}

create = async (req, res, next) =>{
    try {
        res.json(await Market.create({
            name : res.body.name
        }))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getList,
    create
}