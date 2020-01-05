const appliancesService = require('../services/appliances_service');
const { to, ReE, ReS } = require('../services/util_service');
const get = async function (req, res) {
    let user, err;
    [err, user] = await to(appliancesService.getAppliances());
    if (err) return ReE(res, err.message);
    res.send(user);
}
module.exports.get = get;