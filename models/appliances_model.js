const SEQUELIZE = require('sequelize');
var con = require('../Connection/connect.js');
const APPLIANCES = con.define('appliances', {
    // attributes
    name: {
        type: SEQUELIZE.STRING,
    },
    price: {
        type: SEQUELIZE.STRING

    },
    id: {
        type: SEQUELIZE.INTEGER,
        primaryKey: true
    }
});
module.exports = APPLIANCES;
