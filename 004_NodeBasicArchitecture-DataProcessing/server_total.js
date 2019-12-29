const http = require('http');
const url = require('url');
const queryString = require('querystring');
const fs = require('fs');

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
    console.log(path, get, post);
  }
});

server.listen(8080);