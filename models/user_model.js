const SEQUELIZE = require('sequelize');
var con = require('../Connection/connect.js');
const USERS = con.define('users', {
    // attributes
    name: {
        type: SEQUELIZE.STRING,
       
    },
    location: {
        type: SEQUELIZE.STRING
       
    }
    ,
    itemcount: {
        type: SEQUELIZE.STRING

    },
    bill: {
        type: SEQUELIZE.STRING

    },
    id: {
        type: SEQUELIZE.INTEGER,
        primaryKey:true
    },
    
    appliances: {
        type: SEQUELIZE.STRING

    }
});
module.exports = USERS;