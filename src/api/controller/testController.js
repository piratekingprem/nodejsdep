const testmodel = require('../models/testModel');

exports.getAllTitle = async function(req,res,next){
    try {
        const response = await testmodel.get();
        return res.send(response);
    } catch (error) {
        next(error);
    }
}

exports.createTitle = async function(req,res,next){
    try {
        const response = await testmodel.create(req.body);
        return res.send(response);  
    } catch (error) {
        next(error);
    }
}