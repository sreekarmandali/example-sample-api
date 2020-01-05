var con = require('../Connection/connect.js');


var Appliances = require('../models/appliances_model');

const { to, ReE, ReS } = require('../services/util_service');

const getAppliances = async () => {
    let err, user;
    [err, user] = await to(Appliances.findAll({
        attributes: ['name', 'price','id']
    }));
    if (err) TE('appliances not able to fetch');
    return user;
}
module.exports.getAppliances = getAppliances;