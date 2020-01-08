const mysql = require('mysql');
const co = require('co-mysql');

let conn = mysql.createPool({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '',
  database: '20200102'
});
let db = co(conn);

module.exports = db;