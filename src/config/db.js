var mysql = require('mysql');

var conMySql = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'agimplant'
    });
}

module.exports = function () {
    return conMySql;
} 