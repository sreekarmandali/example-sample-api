var express = require('express');
var router = express.Router();
var con = require('../Connection/connect.js');
//var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* GET users listing. */
router.get('/', function (req, res, next) {

    var sql = "select * from Users";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Fetched rows");
        res.send(result);
        
    });

});

router.post('/addUser', function (req, res, next) {
    console.log(JSON.stringify(req.body))
    var sql = "insert into Users (name,location,itemcount,bill,id,appliances) values ( '" + req.body.name + "','" + req.body.location + "','" +

        req.body.itemcount + "','" + req.body.bill + "'," + req.body.id + "," + "'Television,Mobile,Refridgerator')";
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("added row");
        res.end(JSON.stringify(result.affectedRows));

    });

});

router.post('/delete/:id', function (req, res, next) {

    var sql = "delete from Users where id=" + req.params.id;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Deleted row");
        res.end(JSON.stringify(result.affectedRows));

    });

});

router.get('/appliances/:id', function (req, res, next) {
    console.log(req.params.id);

    var sql = "select appliances from Users where id=" + req.params.id;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Appliances fetched rows");
        res.send(result);

    });



});



module.exports = router;

