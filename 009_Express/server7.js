const express = require('express');
const multer = require('multer');

let server = express();
server.listen(8080);

let obj = multer({dest: './static/upload'});
server.use(obj.any());

server.post('/reg', (req, res, next) => {
  console.log(req.files);

  // Send = Write + End (Cannot write again after end, hence cannot send again after send)
  res.send('Upload success!');
});

