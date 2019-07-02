const {create, update, getOne} = require('../../dao/template/');

login = async (req, res, next) => {
    try {
        const {email} = req.body;
        const user = await getOne({modelName: 'User', where:{email}})
        res.json(user)
    } catch (error) {
        throw error
    }
}


register = async (req, res, next) => {
    try {
        const {email, password, login} = req.body;
        const user = await create({modelName: 'User', email, password, login});
        await create({modelName: 'Profile' , userId : user.dataValues.id})
        res.json(user)
    } catch (error) {
        throw error
    }
}

module.exports = {
    login,
    register
}