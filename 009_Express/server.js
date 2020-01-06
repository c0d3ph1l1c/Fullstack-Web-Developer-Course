const express = require('express');

let server = express();
server.listen(8080);

// 
server.get('/a', (req, res, next) => {
  // Can send buffer, string, object, or array
  // res.send({a: 12, b: 5});

  console.log('a');

  // One of the method to pass arguments to next callback (beware of overwriting its default properties)
  req.usertype = 5;

  // throw new Error('aaaa');

  // Execute the next callback
  next();
});
server.get('/a', (req, res, next) => {
  console.log(req.usertype);
});

