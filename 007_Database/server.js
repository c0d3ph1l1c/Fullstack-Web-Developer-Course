const http = require('http');
const mysql = require('mysql');

// 1. Connect to database server
// In this case, wamp mysql server port is et to 3308 (by default 3306)
let db = mysql.createConnection({host: 'localhost', port: 3308, user: 'root', password: '', database: '20200102'});

db.query('SELECT * FROM user_table', (err, data) => {
  if(err) {
    console.log('Error: ', err);
  } else {
    // The data can also be JSON.stringify and pass to browser for rendering
    console.log(data);
  }
});