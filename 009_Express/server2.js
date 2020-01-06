const express = require('express');

let server = express();
server.listen(8080);

// 
server.get('/a', (req, res, next) => {
  res.send('aaa');
});
server.get('/b', (req, res, next) => {
  res.send('bbb');
});

// Do not put this above other routes if no route is specified for it
server.use(express.static('./static/'));