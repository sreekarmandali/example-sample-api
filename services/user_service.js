
var con = require('../Connection/connect.js');


var Users = require('../models/user_model');

const { to, ReE, ReS } = require('../services/util_service');

const createUser = async (userInfo) => {
    let err, user;
    userInfo.appliances = 'Telivison,Mobile';
    console.log(userInfo);
    [err, user] = await to(Users.create(userInfo));
    if (err) TE('user not added');
    return user;
}
module.exports.createUser = createUser;

const removeUser = async (id) => {
    let err, user;
    [err, user] = await to(Users.destroy({ where: { id: id} }));
    if (err) TE('user not deleted');
    return user;
}

module.exports.removeUser = removeUser;

const getUsers = async () => {
    let err, user;
    [err, user] = await to(Users.findAll({
        attributes: ['name', 'location', 'itemcount', 'bill', 'id', 'appliances']
    }));
   if (err) TE('user not able to fetch');
    return user;
}
module.exports.getUsers = getUsers;

const getAppliancesById = async (id) => {
    let err, user;
    [err, user] = await to(Users.findOne({
        attributes: ['appliances'],
        where: {id:id}
    }));
    if (err) TE('user not able to fetch');
    return user;
}
module.exports.getAppliancesById = getAppliancesById;


