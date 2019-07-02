const axios = require('axios');
const {dbHost} = require('../config');

create = async (req, res, next) => {
    try {
        const {birthday, phone, bio} = req.body;
        const profile = await axios.post(`${dbHost}/create`, {birthday, phone, bio, userId : req.user.userId})
        res.json(profile.data)
    } catch (error) {
        next(error)
    }
}

get = async (req, res, next) => {
    try {
        const profile = await axios.get(`${dbHost}/${req.user.userId}`)
        res.json(profile.data)
    } catch (error) {
        next(error)
    }
}

update = async (req, res, next) => {
    try {
        const {birthday, phone, bio} = req.body;
        const profile = await axios.put(`${dbHost}/${req.user.userId}`, {birthday, phone, bio})
        res.json(profile.data)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    update,
    create,
    get
}