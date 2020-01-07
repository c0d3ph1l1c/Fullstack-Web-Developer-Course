const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8080);

server.use(cookieParser(
  'fasdghkljlgfdyghghdfshfgdhtrhgjgh'
));

server.get('/a', (req, res) => {
  console.log('cookie:', req.cookies); // Unsigned cookies
  console.log('signed:', req.signedCookies); // Signed cookies

  // Plant cookie
  res.cookie('amount', 99.8, {
    // httpOnly: true,   // only accessible by web browser (prevent cookie edited by browser js)
    maxAge: 14*86400*1000,
    // secure: true,     // only https
    signed: true
  });

  res.send('ok');
});
