const express = require('express');
const body = require('body-parser');

let server = express();
server.listen(8080);

// Must put this before the post route in order to parse the POST body first
// Extended - create nested objects within your query strings
server.use(body.urlencoded({
  extended: false
}));

// Body-parser will add 'body' property into req 
server.post('/reg', (req, res, next) => {
  console.log(req.body);
});

server.use(express.static('./static/'));