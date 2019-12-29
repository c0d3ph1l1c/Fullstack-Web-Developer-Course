const http = require('http');
const url = require('url');
const queryString = require('querystring');
const fs = require('fs');

let users = {};

let server = http.createServer((req, res) => {
  let path = '', get = {}, post = {};
  
  if (req.method == 'GET') {
    let {pathname, query} = url.parse(req.url, true);
    path = pathname;
    get = query;
    complete();
  } else if(req.method == 'POST'){
    path = req.url;

    let arr = [];
    
    req.on('data', buffer => {
      arr.push(buffer);
    });
    req.on('end', () => {
      let buffer = Buffer.concat(arr);

      post = queryString.parse(buffer.toString());
      complete();
    });
  }

  function complete() {
    if(path == '/reg') {
      let {username, password} = get;

      if(users[username]) {
        res.write(JSON.stringify({ error: 1, msg: 'Username already exists!'}));
        res.end();
      } 
      else {
        users[username] = password;

        res.write(JSON.stringify({ error: 0, msg: ''}));
        res.end();
      }
    } else if(path == '/login') {
      let {username, password} = get;

      if (!users[username]) {
        res.write(JSON.stringify({ error: 1, msg: 'Username not found!'}));
        res.end();
      } else if(users[username] != password) {
        res.write(JSON.stringify({ error: 1, msg: 'Incorrect password!'}));
        res.end();
      } else {
        res.write(JSON.stringify({ error: 0, msg: '' }));
        res.end();
      }
    } else {
      fs.readFile(`www${path}`, (err, buffer) => {
        if(err) {
          res.writeHeader(404);
          res.write('Not Found');
          res.end();
        } else {
          res.write(buffer);
          res.end();
        }
      });  
    }
  }
});

server.listen(8080);