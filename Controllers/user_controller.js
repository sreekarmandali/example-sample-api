const userService = require('../services/user_service');
const { to, ReE, ReS } = require('../services/util_service');

const create = async function (req, res) {
    const BODY = req.body;

    if (!BODY.name && !BODY.location && !BODY.bill && !BODY.itemcount) {
        return ReE(res, 'Please enter an name or location or bill or itemcount.');
    } else {
        let err, user;

        [err, user] = await to(userService.createUser(BODY));

        if (err) return ReE(res, err, 422);
        return ReS(res, { message: 'Successfully created new user.', user: user }, 201);
    }
}
module.exports.create = create;

const remove = async function (req, res) {
    let user, err;
    [err, user] = await to(userService.removeUser( req.params.id ));
    if (err) return ReE(res, 'error occured trying to delete user');
    console.log(user);
    if (user===0)
        return  ReS(res, { message: 'User Doesnot Exist' }, 200);
    
     return ReS(res, { message: 'Deleted User' }, 200);
}
module.exports.remove = remove;


const get = async function (req, res) {
    let user, err;
    [err, user] = await to(userService.getUsers());
    if (err) return ReE(res, err.message);
    res.send(user);
}
module.exports.get = get;

const getAppliancesById = async function (req, res) {
    let appliances, err;
    [err, appliances] = await to(userService.getAppliancesById(req.params.id));
    if (err) return ReE(res, err.message);
    res.send(appliances);
}
module.exports.getAppliancesById = getAppliancesById;

