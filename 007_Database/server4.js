const http = require('http');
const mysql = require('mysql');
const co = require('co-mysql');
const url = require('url');
const fs = require('fs');

// 1. Create a pool of connections (connectionLimit: 10 - by default) that will be picked automatically for use if there are multiple client requests
let conn = mysql.createPool({host: 'localhost', port: 3308, user: 'root', password: '', database: '20200102'});
let db = co(conn);

// 2. Work with http
http.createServer(async (req, res) => {
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
      res.end();
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