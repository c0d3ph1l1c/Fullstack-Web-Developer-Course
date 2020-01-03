const http = require('http');
const mysql = require('mysql');
const co = require('co-mysql');
const url = require('url');
const fs = require('fs');
const validator = require('./libs/validator');

// 1. Create a pool of connections (connectionLimit: 10 - by default) that will be picked automatically for use if there are multiple client requests
let conn = mysql.createPool({host: 'localhost', port: 3308, user: 'root', password: '', database: '20200102'});
let db = co(conn);

// 2. Work with http
http.createServer(async (req, res) => {
  const {pathname, query} = url.parse(req.url, true);
  
  if(pathname == '/reg') {
    let {username, password} = query;

    // 0. Verify whether keys are correct
    let err = validator.username(query.username);
    if(err) {
      res.write(err);
    } else {
      let err = validator.password(query.password);
      if(err) {
        res.write(err);
      } else {
        // 1. Check whether the username has already been used
        try {
          let data = await db.query(`SELECT ID FROM user_table WHERE username='${username}'`);
          if(data.length > 0) {
            res.write('Username already exists!');       
          } else {
            await db.query(`INSERT INTO user_table (username, password) VALUES ('${username}', '${password}')`);
            res.write('Registration successful!');
          }
        } catch(e) {
          res.write('Database error!');
        }
      }
    }
    res.end();
  } else if(pathname == '/login') {
    // 0. Check username and password format
    // 1. Check whether the user exists
    // 2. Verify
    // 3. Result

    let {username, password} = query;

    // 0. Verify whether keys are correct
    let err = validator.password(query.password);
    if(err) {
      res.write(err);
    } else {
      let err = validator.password(query.password);
      if(err) {
        res.write(err);
      } else {
        try {
          let data = await db.query(`SELECT ID, password FROM user_table WHERE username='${username}'`);
          if(data.length == 0) {
            res.write('Username does not exists!');
          } else if(data[0].password != password) {
            res.write('Incorrect Password!');
          } else {
            res.write('Login successful!');
          }
        } catch(e) {
          res.write('Database error!');
          console.log(e);
        }
      }
      res.end();
    }
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