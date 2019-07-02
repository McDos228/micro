const db = require('../../models').sequelize;

parseModel = params => {
    const {modelName} = params;
    delete params.modelName

    return {
        modelName,
        params
    }
}

create = async params => {
    try {
        return await db.models[parseModel(params).modelName].create(parseModel(params).params)    
    } catch (error) {
        throw error
    }    
}

getAll = async params => {
    try {
        // return await db.models[parseModel(params).modelName].findAll();
        parseModel(params).modelName.length===1 ? 
            await db.models[parseModel(params).modelName].findAll() : 
            await db.models[parseModel(params).modelName[0]].findAll({include : parseModel(params).modelName, where:params.where})
    } catch (error) {
        throw error
    }
}

getOne = async params => {
    try {
        console.log(params)
        return await db.models[parseModel(params).modelName].findOne({where:params.where});
    } catch (error) {
        throw error
    }
}

update = async params => {
    try {
        return await db.models[parseModel(params).modelName].update(parseModel(params).params, {where:params.where})
    } catch (error) {
        throw error
    }
}

deleteRecord = async params => {
    try {
        return await db.models[parseModel(params).modelName].delete({where:params.where})
    } catch (error) {
        throw error
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    deleteRecord
}