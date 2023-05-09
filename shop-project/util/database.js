const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-course',
    password:'315312'
})

module.exports = pool.promise()