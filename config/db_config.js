const mysql = require("mysql");


module.exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'esoap_local',
    timezone: 'gmt'
})


module.exports.Registry = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'esoap_global',
    timezone: 'gmt'
})