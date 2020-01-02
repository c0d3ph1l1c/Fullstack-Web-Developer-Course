const http = require('http');
const mysql = require('mysql');
const url = require('url');
const fs = require('fs');

// 1. Connect to database server
// In this case, wamp mysql server port is et to 3308 (by default 3306)
let db = mysql.createConnection({host: 'localhost', port: 3308, user: 'root', password: '', database: '20200102'});

// 2. Work with http
http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url, true);

  if(pathname == '/reg') {
    // 0. Verify whether keys are correct
    let {username, password} = query;
    if(!username || !password) {
      res.write('Username and password must not be empty!');
      res.end();
    } else if(username.length > 32) {
      res.write('Username must not be more than 32 characters');
      res.end();
    } else if (password.length > 32) {
      res.write('Password must not be more than 32 characters');
      res.end();
    } else {
      // 1. Check whether the username has already been used
      db.query(`SELECT ID FROM user_table WHERE username='${username}'`, (err, data) => {
        if(err) {
          res.write('Database error!');
          res.end();
        } else if(data.length > 0) {
          res.write('Username already exists!');
          res.end();
        } else {
          // 2. Insert
          db.query(`INSERT INTO user_table (username, password) VALUES ('${username}', '${password}')`, err => {
            if (err) {
              res.write('Database error!');
              res.end();
            } else {
              res.write('Registration successful!');
              res.end();
            }
          });
        }
      });
    }
  } else if(pathname == '/login') {
    // 1. Check whether the user exists
    // 2. Verify
    // 3. Respond with result
  }else {
    fs.readFile('www' + pathname, (err, buffer) => {
      if(err) {
        res.writeHeader(404);
        res.write('not found');
      } else {
        res.write(buffer);
      }
      res.end();
    });
  }
}).listen(8080);