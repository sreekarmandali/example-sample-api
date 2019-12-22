var express = require('express');
var router = express.Router();
var con = require('../Connection/connect.js');

/* GET users listing. */
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.get('/', function (req, res, next) {
 var sql = "select * from Appliances";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Fetched rows");
        res.send(result);

    });

});
module.exports = router;