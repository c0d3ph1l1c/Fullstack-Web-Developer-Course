const http = require('http');

let server = http.createServer(() => {   
  // Request callback
  console.log('Incoming request!');
});

// Listening
server.listen(8080);
