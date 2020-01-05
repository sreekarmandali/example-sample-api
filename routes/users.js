var express = require('express');
var router = express.Router();
var db = require('../Connection/connect.js');
var userController = require('../Controllers/user_controller');
var Users = require('../models/user_model');
//var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* GET users listing. */
router.get('/', userController.get);

router.post('/addUser', userController.create);



router.post('/delete/:id', userController.remove);


router.get('/appliances/:id', userController.getAppliancesById);


module.exports = router;

