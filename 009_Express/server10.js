const express = require('express');
const cookieSession = require('cookie-session');

let server = express();
server.listen(8080);

// Session data is saved (as temp file by default, database etc) on server , then pass an signed ID cookie for client to access

// signature = one-way mapping (irreversible)
// encryption = two-way mapping (reversible)

server.use(cookieSession({
  // keys used to generate signed ID cookie (key rotation for each request)
  keys: ['asdhudfghdfuighusd', 'ggdfghuasdjasdh', 'usdfgdfhbhdsf'],
  maxAge: 20*60*1000      // 20 minutes
}));

server.get('/a', (req, res) => {
  // console.log(req.session);

  if(!req.session['view']) {
    req.session['view'] = 1;
  } else {
    req.session['view']++;
  }

  req.session['amount'] = 99.8;

  res.send(`Your number of visit: ${req.session['view']}, Your balance: $${req.session['amount']}`);
});
