const http = require('http');
const io = require('socket.io');

// 1. Establish typical http
let server = http.createServer((req, res) => {});
server.listen(8080);

// 2. Establish ws
let wsServer = io.listen(server);
wsServer.on('connection', sock => {
  // sock.emit('name', data)
  // sock.on('name', function(data) {})

  // sock.on('aaa', function(a, b) {
  //   console.log(a, b, a + b);
  // });

  setInterval(function() {
    sock.emit('timer', new Date().getTime());
  }, 1000);
});