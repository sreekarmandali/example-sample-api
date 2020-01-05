var express = require('express');
var router = express.Router();
var con = require('../Connection/connect.js');
var applianceController = require('../Controllers/appliances_controller');

/* GET users listing. */
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.get('/', applianceController.get);
module.exports = router;