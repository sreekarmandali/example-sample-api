var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "oracle",
    database: "sreekar"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "customers" table:
    
});
module.exports = con;