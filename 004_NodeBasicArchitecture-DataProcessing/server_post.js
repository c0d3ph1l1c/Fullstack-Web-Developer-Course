const http = require('http');
const queryString = require('querystring');

let server = http.createServer(function(req, res){
  console.log(req.method);
  let arr = [];
  req.on('data', buffer => {
    arr.push(buffer);
  });
  req.on('end', () => {
    let buffer = Buffer.concat(arr);
    let post = queryString.parse(buffer.toString());
    
    console.log(post);
  });
});

server.listen(8080);