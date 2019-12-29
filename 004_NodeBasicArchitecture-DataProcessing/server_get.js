const http = require('http');
const queryString = require('querystring');

let server = http.createServer(function(req, res){
  let [url, query] = req.url.split('?');

  let get = queryString.parse(query);

  console.log(url, get);
});

server.listen(8080);