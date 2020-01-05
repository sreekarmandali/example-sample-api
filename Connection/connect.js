


const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const con = new Sequelize('sreekar', 'root', 'oracle', {
    host: 'localhost',
    dialect: 'mysql',
    timestamps: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

con.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = con;