const {create, update, getOne} = require('../../dao/template/');

createProfile = async (req, res, next) =>{
    try {
        const {birthday, phone, bio, userId} = req.body;
        const profile = await create({modelName: 'Profile', birthday, phone, bio, userId});
        res.json(profile)
    } catch (error) {
        next(error)
    }
}

getProfile = async (req, res, next) =>{
    try {
        const {userId} = req.params;
        const profile = await getOne({modelName: 'Profile', where:{userId}})
        res.json(profile)
    } catch (error) {
        next(error)
    }
}

updateProfile = async (req, res, next) =>{
    try {
        const {birthday, phone, bio} = req.body;
        const userId = req.params.userId;
        const profile = await update({modelName: 'Profile', birthday, phone, bio, where : {userId}});
        res.json(profile)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createProfile,
    updateProfile,
    getProfile
}