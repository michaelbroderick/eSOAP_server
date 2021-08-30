const mysql = require("mysql");


module.exports.connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE || 'esoap_local',
    timezone: 'gmt'
})


module.exports.Registry = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE || 'esoap_global',
    timezone: 'gmt'
})