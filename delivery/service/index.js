const {Good} = require('../models');

getList = async (req, res, next) => {
    try {
        res.json(await Good.findAll())
    } catch (error) {
        next(error)
    }
}

create = async (req, res, next) =>{
    try {
        res.json(await Good.create({
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